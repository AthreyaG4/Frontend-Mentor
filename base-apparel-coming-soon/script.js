window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("form");
    const inputs = document.querySelector("form input");
    const span_p = document.querySelector("form p");
    form.addEventListener('submit',(e)=>{
        if(inputs.value===""){
            span_p.classList.remove("invisible");
            inputs.classList.add("red-border");
            e.preventDefault();
        }
        else{
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs.value)){
                span_p.classList.remove("invisible");
                inputs.classList.add("red-border");
                e.preventDefault();
            }    
            else{
                span_p.classList.add("invisible");
                inputs.classList.remove("red-border");
            }
        }
    });
});