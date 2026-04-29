// Show Hide Content
function showContent(){
document.getElementById("about").style.display="block";
}

function hideContent(){
document.getElementById("about").style.display="none";
}

// Dark Mode
function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

// Image Slider
let images = ["images/img1.png","images/img2.png","images/img3.png"];
let index = 0;

function nextImage(){
index++;
if(index >= images.length){
index = 0;
}
document.getElementById("slider").src = images[index];
}

function prevImage(){
index--;
if(index < 0){
index = images.length -1;
}
document.getElementById("slider").src = images[index];
}

// To Do List
function addTask(){
let input = document.getElementById("taskInput");
let li = document.createElement("li");

li.innerHTML = input.value + 
' <button onclick="this.parentElement.remove()">Delete</button>';

document.getElementById("taskList").appendChild(li);

input.value="";
}

// Form Validation
function validateForm(event){
event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name=="" || email=="" || message==""){
document.getElementById("error").innerText="All fields required";
return false;
}

if(!email.includes("@")){
document.getElementById("error").innerText="Invalid Email";
return false;
}

document.getElementById("error").innerText="Form Submitted Successfully";
return true;
}