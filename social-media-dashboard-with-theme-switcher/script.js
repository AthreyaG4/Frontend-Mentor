const main = document.querySelector("main");

const toggle_button = document.querySelector(".toggle-button");
const toggle_button_ball = document.querySelector(".ball");
toggle_button.addEventListener("click",(e)=>{
    toggle_button_ball.classList.toggle("right");

    if(main.classList.contains("dark")){
        main.classList.replace("dark","light");
    }
    else{
        main.classList.replace("light","dark");
    }
});