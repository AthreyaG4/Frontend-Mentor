window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("form input");
    const span_p = document.querySelectorAll("form p");
    form.addEventListener('submit',(e)=>{
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].value===""){
                span_p[i].classList.remove("invisible");
                e.preventDefault();
            }
            else{
                if(i==2){
                    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs[i].value)){
                        span_p[i].classList.remove("invisible");
                        e.preventDefault();
                    }    
                    else{
                        span_p[i].classList.add("invisible");
                    }
                }
                else{
                    span_p[i].classList.add("invisible");
                }

            }
        }
    });
});