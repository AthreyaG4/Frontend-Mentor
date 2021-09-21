const main = document.querySelector("main");

const toggle_button = document.querySelector(".toggle-button");
const toggle_button_ball = document.querySelector(".ball");
toggle_button.addEventListener("click",(e)=>{
    toggle_button_ball.classList.toggle("right");

    if(main.classList.contains("dark")){
        main.classList.remove("dark");
        main.classList.add("light");
        console.log(main.classList);
    }
    else{
        main.classList.remove("light");
        main.classList.add("dark");
        console.log(main.classList);
    }
});