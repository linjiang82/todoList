<?php
$myfile = fopen("json.txt","w") or die("unable to open file!");
$seq=$_POST["seq"];
$text=$_POST["text"];
$content ="{\"item[$seq]\":\"$text\"}";
if($content !="")
{	fwrite($myfile,$content);
}
else
fclose($myfile);
?>
