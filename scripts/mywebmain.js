// Image switcher code 

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/photo1.png") {
        myImage.setAttribute("src", "images/photo2.png");
    }
    if (mySrc === "images/photo2.png") {
        myImage.setAttribute("src", "images/photo3.png");
    }
    if (mySrc === "images/photo3.png") {
        myImage.setAttribute("src", "images/photo4.png");
    }
    if (mySrc === "images/photo4.png") {
        myImage.setAttribute("src", "images/photo5.png");
    }
    if (mySrc === "images/photo5.png") {
        myImage.setAttribute("src", "images/photo1.png");
    }
}

// Personalized background color 
let myButton = document.querySelector("button");

function setBackgroundColor() {
    const myColor = prompt("Please choose your favorite color");
    if (myColor) {
        localStorage.setItem("color", myColor);
        document.body.style.backgroundColor = myColor;
    }   else {
        alert("You didn't put your favorite color.");
    }
}

function colorchange() {
    const storedColor = localStorage.getItem("color");
    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
    } else {
        setBackgroundColor();
    }
}

colorchange();

myButton.onclick = () => {
    setBackgroundColor();
};