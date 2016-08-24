<?php
$myfile = fopen("json.txt","w") or die("unable to open file!");
$txt  = $_POST["text"];
if($txt !="")
{	fwrite($myfile,$txt);
}
else
fclose($myfile);
?>
