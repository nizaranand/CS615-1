<?php

// http://code.google.com/apis/chart/infographics/docs/overview.html

$userinput = "Is this the test input?";

//debug info
echo $userinput;
echo "<br />";
echo rawurlencode($userinput);
echo "<br />";

//
$qrUrl = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=$userinput";

echo "<hr>";

echo "<h3> Sample Image and QR Code: </h3> <br />";
echo '<img src="placeholder.jpg" alt="place holder" title="place holder" height = "150" width = "150">';
echo '<img src="'.$qrUrl.'" alt="QR code" title="QR code">';

?>