function itemClick() { 
        var x = document.getElementById("fooditem");
       if (x.style.backgroundColor == "lightblue") 
        {
            x.style.backgroundColor = "white";
 }
 else {
    x.style.backgroundColor = "lightblue";
 }
}
function itemClick2() { 
    var x = document.getElementById("fooditem2");
   if (x.style.backgroundColor == "lightblue") 
    {
        x.style.backgroundColor = "white";
}
else {
x.style.backgroundColor = "lightblue";
}
}
function itemClick3() { 
    var x = document.getElementById("fooditem3");
   if (x.style.backgroundColor == "lightblue") 
    {
        x.style.backgroundColor = "white";
}
else {
x.style.backgroundColor = "lightblue";
}
}
function itemClick4() { 
    var x = document.getElementById("fooditem4");
   if (x.style.backgroundColor == "lightblue") 
    {
        x.style.backgroundColor = "white";
}
else {
x.style.backgroundColor = "lightblue";
}
}
function itemClick5() { 
    var x = document.getElementById("fooditem4");
   if (x.style.backgroundColor == "lightblue") 
    {
        x.style.backgroundColor = "white";
}
else {
x.style.backgroundColor = "lightblue";
}
}
function itemClick6() { 
    var x = document.getElementById("fooditem4");
   if (x.style.backgroundColor == "lightblue") 
    {
        x.style.backgroundColor = "white";
}
else {
x.style.backgroundColor = "lightblue";
}
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
