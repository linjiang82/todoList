window.onload = function(){
	var i;
var items=document.getElementsByClassName("items");
	var monitorInput = function(){
	for(i=0;i<items.length;i++){
//console.log(items[i].value);
items[i].addEventListener('keyup',saveTofile);//when sth entered, save to a file and create another line for a new item if requirement met.
}
};
function addOneRow(){
		var newrow = document.createElement("input");
		newrow.setAttribute("type","text");
		newrow.setAttribute("value","");
		newrow.setAttribute("class","items");
document.getElementById("main").appendChild(newrow);
monitorInput();
	};
	function saveTofile(){
	if(items[items.length-1].value!="")//when the last input has some text, add a new row
		addOneRow();
		var text="seq=" + (i-1) + "&text=" + this.value;
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
monitorInput();

};
