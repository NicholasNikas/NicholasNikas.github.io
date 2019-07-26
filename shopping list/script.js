
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var delBtn = document.getElementsByClassName("del");

function inputLength(){
	 return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	btn.addEventListener("click",clearElement);
	li.appendChild(btn);

	liEvent();
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength()  > 0 && event.keyCode === 13){ // keCode 13 is for enter 
		createListElement();
	}
}

// ******************

function toggleList() {
	this.classList.toggle("done");
}

function liEvent() {
	for (i=0; i<li.length; i++){
		li[i].addEventListener('click',toggleList);
	}
}

function delBtnEvent() {
	for (var i=0; i<delBtn.length; i++){
		delBtn[i].addEventListener("click", clearElement);
	}
}


function clearElement() {
	for (var i=0; i<li.length; i++){
		this.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liEvent();

delBtnEvent();




