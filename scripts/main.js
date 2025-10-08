const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/avatar.jpg") {
    myImage.setAttribute("src", "images/anh-bia.png");
  } else {
    myImage.setAttribute("src", "images/avatar.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name (Full name, upcase)");
  localStorage.setItem("name", myName);
  myHeading.textContent = `${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});