window.onload = function(){
	function saveTofile(event){
		var text="text=" + this.value;
		var xhr= new XMLHttpRequest();
		xhr.onreadystatechange = function(){
	if(xhr.readyState === XMLHttpRequest.DONE && xhr.status ===200)
	{

	}
		}
		xhr.open('POST','writefile.php',true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(text);
	}
var items=document.getElementsByClassName("items");
for(i=0;i<items.length;i++){
//console.log(items[i].value);
items[i].addEventListener('keyup',saveTofile)//when sth entered, save to a file and create another line for a new item.
}
};
