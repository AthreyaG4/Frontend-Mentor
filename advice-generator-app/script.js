const container = document.querySelector(".svg-container");

async function initApp(){
    const number = document.querySelector(".number");
    const advice = document.querySelector(".advice");
    let response = await fetch("https://api.adviceslip.com/advice");
    let {slip : data} = await response.json(); 
    number.textContent = data.id;
    advice.textContent = data.advice;
}

container.addEventListener("click", async (event) =>{
    initApp();
});

initApp();