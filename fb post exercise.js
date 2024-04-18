

//DECLARING ALL VARABLES OF THE DIV1 TO DIV5 FOR THE (BACKGROUNDCOLOR FUNCTION);
function ChooseColor(){
     

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");

//THE COLORS OF THE VARABLES ARE BEEN DESCRIBED;
div1.style.backgroundColor = "blue";
div2.style.backgroundColor = "red";
div3.style.backgroundColor = "green";
div4.style.backgroundColor = "purple";
div5.style.backgroundColor = "grey";

}


function div1(){
    var div1 = document.getElementById("div1");
    var input = document.getElementById("text");

 input.style.backgroundColor = div1.style.backgroundColor;

}

function div2(){
    var div2 = document.getElementById("div2");
    var input = document.getElementById("text");

    input.style.backgroundColor = div2.style.backgroundColor;

}

function div3(){
    var div3 = document.getElementById("div3");
    var input = document.getElementById("text");

    input.style.backgroundColor = div3.style.backgroundColor;

}

function div4(){
    var div4 = document.getElementById("div4");
    var input = document.getElementById("text");

  input.style.backgroundColor = div4.style.backgroundColor ;

}

function div5(){
    var div5 = document.getElementById("div5");
    var input = document.getElementById("text");

    input.style.backgroundColor = div5.style.backgroundColor ;

}


function Post(){

var input = document.getElementById("text");
var Result = document.getElementById("Result");

var child = document.createElement("p");

var childText = document.createTextNode(input.value);

child.appendChild(childText);

var Parent = document.getElementById("Result");
Parent.appendChild(child);

child.innerText = input.value;
child.style.backgroundColor = input.style.backgroundColor;


}

