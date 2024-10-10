let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./img/20240921.jpg") {
      myImage.setAttribute("src", "./img/20241050.png");
    } else {
      myImage.setAttribute("src", "./img/20240921.jpg");
    }
};