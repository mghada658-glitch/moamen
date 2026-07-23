let counter = document.getElementById("counter");
let paragraph = document.getElementById("p1");
let paragraph2 = document.getElementById("p2");
let paragraph3 = document.getElementById("p3");
let random = Math.floor(Math.random()*7)+1;
let count = 0

//Counter program 🔢
const Increases  = () =>{
    count += 1
    counter.innerText = count
}
const Reset = () =>{
    count = 0
    counter.innerText = 0
}
const Decreases = () =>{
    count -= 1
    counter.innerText = count
}
