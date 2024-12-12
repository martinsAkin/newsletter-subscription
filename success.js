/* function action() {
  var button = document.getElementById('btn');
  let name = document.getElementById('btn').textContent;
  
 let display = document.getElementById('display');
 
 
 
  if(display.style.display === "none") {
     display.style.display == "block";
 }
  console.log("hi");
  
} */

/* var name = document.getElementById('name');
  let text = document.getElementById('display');
  

function action() {
    let input = document.getElementById('text-box').value;
    
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  name.textContent = input;
} */




let text = document.getElementById('display');
let prompt = document.getElementById('invalid');
function action() {
  let input = document.getElementById('text-box').value;
 let box = document.getElementById('text-box');
  
  if(input === "") {
      prompt.style.display = "block";
      box.style.border ="red 2px solid";
  } 
  else if (!input.includes("@gmail.com")){
  
      prompt.style.display = "block";
      box.style.border ="red 2px solid"
  } 
  else if((input !=" ") && (input.includes("@gmail.com")) ){
  
  if (text.style.display === "none") {
    text.style.display = "block";
  } 
  else {
    text.style.display = "none";
  } 
  box.style.border = "green 2px solid";
  prompt.style.display = "none";
 }
  var name = document.getElementById('name');
  name.innerHTML = input;
  
  
}
