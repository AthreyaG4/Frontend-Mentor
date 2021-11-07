const back_this_prj_btn = document.querySelector(".back-this-prj-btn");
const select_btns = document.querySelectorAll(".select-btn");
const radio_btns = document.querySelectorAll("input[type='radio']");
const continue_btns = document.querySelectorAll(".continue-btn");
const close_btn_modal = document.querySelector(".close-icon-modal"); 
const inputs = document.querySelectorAll(".selection-modal input[type=text]");

const overlay = document.querySelector(".overlay");
const selection_modal = document.querySelector(".selection-modal");
const success_modal = document.querySelector(".success-modal");
const main_select_cards = document.querySelectorAll("main .select-card");
const selection_modal_select_cards = document.querySelectorAll(".selection-modal .select-card");

const finish_btn = document.querySelector(".finish-btn");

let number_left = [101,64,2];

const main_number_left = document.querySelectorAll("main .number-left #bold-text");
const selection_modal_number_left = document.querySelectorAll(".selection-modal .number-left #bold-text");

main_number_left.forEach((ele,index) =>{
    ele.textContent = number_left[index];
});

selection_modal_number_left.forEach((ele,index) =>{
    ele.textContent = number_left[index];
})

back_this_prj_btn.addEventListener("click",() => {
    overlay.classList.remove("hidden");
    selection_modal.classList.remove("hidden");
    radio_btns[0].checked = true;
});

continue_btns.forEach((continue_btn,index) => {
    continue_btn.addEventListener("click",() => {
        selection_modal.classList.add("hidden");
        success_modal.classList.remove("hidden");
        if(index!=0){
            number_left[index-1]--;
            main_number_left[index-1].textContent = `${number_left[index-1]} `;
            selection_modal_number_left[index-1].textContent = `${number_left[index-1]}`;
        }
        inputs.forEach(input =>{
            input.value = "";
        });
    });
})

select_btns.forEach((select_btn,index) =>{
    select_btn.addEventListener("click",()=>{
        overlay.classList.remove("hidden");
        success_modal.classList.add("hidden");
        selection_modal.classList.remove("hidden");
        radio_btns[index+1].checked = true;
    });
});

close_btn_modal.addEventListener("click",()=>{
    overlay.classList.add("hidden");
    selection_modal.classList.add("hidden");
    success_modal.classList.add("hidden");
});

overlay.addEventListener("click",()=>{
    overlay.classList.add("hidden");
    selection_modal.classList.add("hidden");
    success_modal.classList.add("hidden");
});

finish_btn.addEventListener("click",()=>{
    overlay.classList.add("hidden");
    selection_modal.classList.add("hidden");
    success_modal.classList.add("hidden");
});


//checks 
setInterval(()=>{
    number_left.forEach((number,index) =>{
        if(number == 0){
            main_select_cards[index].classList.add("disabled");
        }
        else{
            main_select_cards[index].classList.remove("disabled");
        }
    })
},100);






