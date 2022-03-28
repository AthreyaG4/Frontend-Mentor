const labels = document.querySelectorAll(".buttons label");
const radios = document.querySelectorAll("input[type=radio]");
const submitButton = document.querySelector(".submit-button");
const rating = document.querySelector(".rating");
const main = document.querySelector("main");
const thankyou = document.querySelector(".thankyou-card");
let done = false;

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    radios.forEach((radio,index) => {
        if(radio.checked){
            rating.textContent = index+1;
            done = true;
        }
    });
    if(!done){
        return;
    }
    main.classList.add("invisible");
    thankyou.style.display = "flex";
    thankyou.classList.remove("invisible");
});

setInterval(()=>{
    radios.forEach((radio,index) => {
        radio.checked ? labels[index].classList.add("selected") : labels[index].classList.remove("selected");
    });
},100);