var studentlist=JSON.parse(localStorage.getItem("studentdata"));

studentlist.map(function(elem){

var box=document.createElement("div");

var name=document.createElement("h2");
name.innerText=elem.studentname;

var batch=document.createElement("p");
batch.innerText=elem.batch;

var course=document.createElement("p");
course.innerText=elem.course;

var image=document.createElement("img");
image.src=elem.image;

var unit=document.createElement("p");
unit.innerText=elem.unit;

var btn=document.createElement("button");
btn.innerText="Remove";
btn.addEventListener("click",function(){
    removeitem(elem.index)
});
btn.addEventListener("click",function(){
    localStorage.setItem("trash",index);
})

box.append(image,name,batch,course,unit,btn);

document.getElementById("container").append(box);

})

function removeitem(elem,index){
    studentlist.splice(index,1);
    localStorage.setItem("studentdata",JSON.stringify(studentlist));
    window.location.reload();
}