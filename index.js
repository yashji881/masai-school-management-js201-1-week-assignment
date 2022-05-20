document.getElementById("form").addEventListener("submit",savedetail);

let dataarr=JSON.parse(localStorage.getItem("studentdata"))|| [];
function savedetail(){
event.preventDefault();

var name=document.getElementById("name").value;
var course =document.getElementById("course").value;
var unit=document.getElementById("unit").value;
var image=document.getElementById("image").value;
var batch=document.getElementById("batch").value;

var studentobj={
    studentname:name,
    course:course,
    unit:unit,
    image:image,
    batch:batch
}

dataarr.push(studentobj);
localStorage.setItem("studentdata",JSON.stringify(dataarr));

document.getElementById("name").value=null;
document.getElementById("course").value=null;
document.getElementById("unit").value=null;
document.getElementById("image").value=null;
document.getElementById("batch").value=null;
}

