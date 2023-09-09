let a =Math.floor(Math.random()*6)+1;
console.log(a);
let imagePath = "dice" + a + ".png";
console.log(imagePath);

let imageFolderCapture = "images/" + imagePath;
console.log(imageFolderCapture);

let imageGet = document.querySelectorAll("img")[0];
console.log(imageGet);

imageGet.setAttribute("src", imageFolderCapture);




let b = Math.floor(Math.random()* 6 ) + 1;
console.log(b);

let imagePath2 = "images/dice" + b + ".png";
console.log(imagePath2);


document.querySelectorAll("img")[1].setAttribute("src", imagePath2);


if (a > b) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
    // const audio = new Audio("crash.mp3");
    // audio.play();
}
else if (b > a) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
    // const audio = new Audio("crash.mp3");
    // audio.play();
}
else if (a === b) {
    document.querySelector("h1").innerHTML = "Draw"
    // const audio = new Audio("crash.mp3");
    // audio.play();
}
