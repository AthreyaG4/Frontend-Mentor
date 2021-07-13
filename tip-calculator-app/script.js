window.addEventListener("DOMContentLoaded",(e)=>{
    //This is to make the buttons work. That is it should be active if mouse is pressed on a button and all other buttons should be inactive.
    const button_grp_buttons = document.querySelectorAll(".btn-group>*");
    const custom_input = document.querySelector(".btn-group input")
    for (let i = 0; i < button_grp_buttons.length; i++) {
        const element = button_grp_buttons[i];
        element.addEventListener("click",(e)=>{
            if(element!=custom_input){
                element.classList.add("active");
            }
            for (let j = 0; j < button_grp_buttons.length; j++) {
                if(button_grp_buttons[j]!=element){
                    button_grp_buttons[j].classList.remove("active");
                }
            }
        });
    }

    const price = document.querySelectorAll(".displays .price");
    const inputs = document.querySelectorAll(".input>input");
    const reset_button = document.querySelector(".reset");
    const bill_input = inputs[0];
    const number_of_people = inputs[1];
    const error = document.querySelector(".input-heading .error");
    
    //This is to call the function to control active states of the reset button to run every few milliseconds.
    window.setInterval(()=>{
        let tip_amount=0;
        let total = 0;

        //Error states
        if(number_of_people.value===""){
            number_of_people.classList.add("red-border");
            error.classList.remove("invisible");
        }else{
            number_of_people.classList.remove("red-border");
            error.classList.add("invisible");
        }

        //Calculation logic also with reset button state changes.
        if(custom_input.value===""&&bill_input.value===""&&number_of_people.value===""&&!check_any_active_button()){
            reset_button.classList.remove("reset-active");
        }
        else if((custom_input.value!=""||check_any_active_button())&&bill_input.value!=""&&number_of_people.value!=""){
            if(custom_input.value===""){
                tip_amount = parseFloat(((bill_input.value/number_of_people.value) * button_grp_buttons[active_button()].value)/100);
            }
            else{
                tip_amount = parseFloat(((bill_input.value/number_of_people.value) * custom_input.value)/100);
            }

            total = tip_amount + (bill_input.value/number_of_people.value);

            tip_amount = tip_amount.toFixed(2);
            total = total.toFixed(2);
            price[0].innerHTML = `${tip_amount}`;
            price[1].innerHTML = `${total}`;
        }
        else{
            reset_button.classList.add("reset-active");
        }
    },100);

    
    //This is to make the reset button working.
    reset_button.addEventListener("click",(e)=>{
        for(let i=0;i<button_grp_buttons.length;i++){
            button_grp_buttons[i].classList.remove("active");
        }
        bill_input.value="";
        number_of_people.value="";
        custom_input.value="";
        reset_button.classList.remove("reset-active");
        price[0].innerHTML = "0.00";
        price[1].innerHTML = "0.00";
    });

    //Function to check if any buttons are active.
    function check_any_active_button(){
        for (let i = 0; i < button_grp_buttons.length-1; i++) {
            const element = button_grp_buttons[i];
            if(element.classList.contains("active")){
                return true;
            }
        }
        return false;
    }

    function active_button(){
        for (let i = 0; i < button_grp_buttons.length-1; i++) {
            const element = button_grp_buttons[i];
            if(element.classList.contains("active")){
                return i;
            }
        }
    }
});