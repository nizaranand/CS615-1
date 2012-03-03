<html>
<head>
<title>Connecting MySQL Server</title>
</head>
<body>

<?php

$dbhost = 'localhost';
$dbuser = 'larousse';
$dbpass = 'Passw0rd';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
     die('Could not connect: ' . mysql_error());
}
echo 'Connected successfully';
mysql_close($conn);

?>

</body>
</html>