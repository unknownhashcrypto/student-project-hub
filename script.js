const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();
let projects = document.querySelectorAll(".project");

projects.forEach(function(project){

let text = project.textContent.toLowerCase();

if(text.includes(filter)){
project.style.display="block";
}
else{
project.style.display="none";
}

});

});

function downloadProject(){
alert("Download feature coming soon!");
}
