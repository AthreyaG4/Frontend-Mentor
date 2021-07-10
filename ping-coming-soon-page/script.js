window.addEventListener('DOMContentLoaded', (event) => {
    form = document.querySelector("form");
    input = document.querySelector("input");
    paragraph_mobile = document.querySelector(".error-mobile");
    paragraph_desktop = document.querySelector(".error-desktop");
    form.addEventListener('submit',(e)=>{
        if(input.value===""){
            e.preventDefault();
            paragraph_desktop.classList.remove("invisible");
            paragraph_mobile.classList.remove("invisible");
            input.classList.add("red-border");
        }
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value)){
            e.preventDefault();
            paragraph_desktop.classList.remove("invisible");
            paragraph_mobile.classList.remove("invisible");
            input.classList.add("red-border");
            
        }
        else{
            paragraph_desktop.classList.add("invisible");
            paragraph_mobile.classList.add("invisible");
            input.classList.remove("red-border");
            e.preventDefault();
        }
    })
});