<?php
	$con = mysqli_connect('localhost', 'root', '', 'ambassadors');

	if(!$con){
		echo 'Database Connection Error: ' .mysqli_errno();
	}

?>