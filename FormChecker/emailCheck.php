<?php

require "connect_to_mysql.php";

if(isset($_POST['email'])){

	$email = mysql_real_escape_string($_POST['email']);
	if (!empty ($email)){
		$emailQuery = mysql_query("SELECT COUNT(`id`) FROM `customers` WHERE `email` = '$email'");
		$emailResult = mysql_result($emailQuery, 0);
		
		if($emailResult == 0){
			echo 'Email Not Registered ...';
		}
		else if($emailResult == 1){
			echo 'Email Registered ...';
		}
	}
}

?>