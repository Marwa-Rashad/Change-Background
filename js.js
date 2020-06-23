let myBtn = document.getElementById("myBtn");
let body = document.body;


myBtn.addEventListener("click", function() {

    let red = Math.floor(Math.random() *256);
    let green = Math.floor(Math.random() *256);
    let blue = Math.floor(Math.random() *256);

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

})


