const inputField = document.querySelectorAll("input"),
  warningImg = document.querySelectorAll(".warning-img"),
  warningText = document.querySelectorAll(".warning");


document.querySelector("#form").addEventListener("submit", (event) => {

event.preventDefault();


for (let i = 0; i < inputField.length; i++) {
  if (inputField[i].value.trim()==="") {
    warningImg[i].classList.add("visible");
    warningText[i].classList.add("visible");
    inputField[i].classList.add("red-border");
  }
}

let email = document.getElementById("email");
const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


 if (!emailTest.test(email.value)){
   warningImg[2].classList.add("visible");
   warningText[2].classList.add("visible");
   inputField[2].classList.add("red-border");
   email.style.color = "hsl(0, 100%, 74%)";
   }



});
