<?php 

$db_host = "localhost";
// Place the username for the MySQL database here
$db_username = "customers"; 
// Place the password for the MySQL database here
$db_pass = "Passw0rd";
// Place the name for the MySQL database here
$db_name = "customers";

mysql_connect("$db_host","$db_username","$db_pass") or die(mysql_error());
mysql_select_db("$db_name") or die("no database by that name");

?>