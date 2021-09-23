const input1 = document.querySelector("#d");
const input2 = document.querySelector("#w");
const input3 = document.querySelector("#m");

const daily = document.querySelectorAll(".daily");
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll(".monthly");

setInterval(() =>{
    if(input1.checked){
        for(let i=0;i<daily.length;i++){
            daily[i].classList.remove("invisible");
            weekly[i].classList.add("invisible");
            monthly[i].classList.add("invisible");
        }
    }
    else if(input2.checked){
        for(let i=0;i<daily.length;i++){
            daily[i].classList.add("invisible");
            weekly[i].classList.remove("invisible");
            monthly[i].classList.add("invisible");
        }
    }
    else if(input3.checked){
        for(let i=0;i<daily.length;i++){
            daily[i].classList.add("invisible");
            weekly[i].classList.add("invisible");
            monthly[i].classList.remove("invisible");
        }
    }
},10);
