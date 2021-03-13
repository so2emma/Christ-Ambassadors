(function($, document, window){

	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);

//Timer.....
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor(t / (1000 * 60 * 60) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total' : t,
			'days' : days,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds,
		};
}
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
// if there's a cookie with the name myClock, use that value as the deadline
if(document.cookie && document.cookie.match('myClock')){
  // get deadline value from cookie
  var deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
}

// otherwise, set a deadline and
// save it in a cookie with that name
else{
	var timeInDays = 12;
	var timeInHours = 24;
	var timeInMinutes = 60;
	var currentTime = Date.parse(new Date());
	var deadline = new Date(currentTime + timeInDays*timeInHours*timeInMinutes*60*1000);

  // store deadline in cookie for future reference
  document.cookie = 'myClock=' + deadline + '; path=/; domain=.yourdomain.com';
}
initializeClock('clockdiv', deadline);
