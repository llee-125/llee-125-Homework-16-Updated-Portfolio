var myButtonId = document.querySelector("#message");

var toggleColor = false;

// sets the display color at refresh
if (toggleColor === false) {
  myButtonId.className = "blue";
  toggleColor = false;
  console.log("The color is: blue")
} 

// myH1.textContent = "Hello world";

var myBtn = document.querySelector("#btnSubmit");

myBtn.addEventListener("click", function(){

if (toggleColor === false) {
  myButtonId.className = "red";
  toggleColor = true;
  console.log("The color is: red")
} else {
  myButtonId.className = "blue";
  toggleColor = false;
  console.log("The color is: blue")
}
});