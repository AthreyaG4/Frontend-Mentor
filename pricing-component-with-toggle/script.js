const ball = document.querySelector(".ball");
const toggle_button = document.querySelector(".toggle-button");
const monthly_prices = document.querySelectorAll(".card .price-monthly")
const anual_prices = document.querySelectorAll(".card .price-anually");
console.log(monthly_prices,anual_prices);
toggle_button.addEventListener("click",(e)=>{
    ball.classList.toggle("right");
});

window.setInterval(()=>{
    if(ball.classList.contains("right")){
        console.log("here");
        for(let i=0;i<monthly_prices.length;i++){
            monthly_prices[i].classList.remove("invisible");
            anual_prices[i].classList.add("invisible");
        }
    }
    else{
        for(let i=0;i<monthly_prices.length;i++){
            monthly_prices[i].classList.add("invisible");
            anual_prices[i].classList.remove("invisible");
        }
    }
},100);
