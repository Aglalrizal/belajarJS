// untuk menampilkan ke console
// console.log("Hello world!");

// untuk menampilkan alert
// alert("Hello world!");

// untuk input data
// prompt("are you ok?");

// variabel: var, let, & const
// var 
// var promnet = "Coding is easy!";
// console.log(promnet);
// var promnet = "Coding is not easy!";
// console.log(promnet);
// let
// let promnet = "Coding is easy!";
// console.log(promnet);
//akan error karena dengan let tidak bisa deklarasi ulang dengan nama yang telah digunakan
// let promnet = "Coding is not easy!";
// console.log(promnet);
//const 
// const promnet = "Coding is easy!";
// console.log(promnet);
//variable dengan tipe const tidak bisa diganti nilai variablenya setelah dideklarasikan
// promnet = "Coding is not easy!";
// console.log(promnet);

// let poin = prompt("Masukan poinmu: ");
// if (poin > 100) {
//     document.write("yeay...");
// } else {
//     document.write("dih...");
// }

// let x = 6;
// let y = 3;
// ditampilkan di console
// console.log(x<10&&y>1);
// console.log(x<10&&y<1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));
// ditampilkan pada web
// document.writeln(x<10&&y>1);
// document.writeln(x<10&&y<1);
// document.writeln(x==5||y==5);
// document.writeln(x==6||y==5);
// document.writeln(!(x==y));

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

//script for todo-list

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

inputBox.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        addTask();
    }
});