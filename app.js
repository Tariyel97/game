const input = document.querySelector("input")
const button = document.querySelector(".btn")
const midlle =document.querySelector(".content")
const respons = document.querySelector (".respons")

let randomNum = Math.floor(Math.random()*15)+1

console.log(randomNum);

button.addEventListener("click", ()=>{
    if(Number(input.value) === randomNum){
        midlle.textContent = `You are win! Number is : ${input.value}`
        respons.textContent = ""
    }
    else if (input.value > 15 ){
        respons.textContent = `Please enter from 1 until 15 numbers`
    }
    else if(input.value >randomNum){
        midlle.textContent = `Your is too high`
        respons.textContent = ""
        
    }
    else{
        midlle.textContent = `Your is too low 😒`
        respons.textContent = ""
    }
})
