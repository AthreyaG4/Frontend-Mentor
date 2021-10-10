const back_this_prj_btn = document.querySelector(".back-this-prj-btn");
const select_btns = document.querySelectorAll(".select-btn");
const radio_btns = document.querySelectorAll("input[type='radio']");
const continue_btns = document.querySelectorAll(".continue-btn"); 

const overlay = document.querySelector(".overlay");
const selection_modal = document.querySelector(".selection-modal");
const success_modal = document.querySelector(".success-modal");

const finish_btn = document.querySelector(".finish-btn");

back_this_prj_btn.addEventListener("click",() => {
    overlay.classList.remove("hidden");
    selection_modal.classList.remove("hidden");
});

continue_btns.forEach(continue_btn => {
    continue_btn.addEventListener("click",() => {
        selection_modal.classList.add("hidden");
        success_modal.classList.remove("hidden");
    })
})

select_btns.forEach(select_btn =>{
    select_btn.addEventListener("click",()=>{
        overlay.classList.remove("hidden");
        success_modal.classList.add("hidden");
        selection_modal.classList.remove("hidden");
    });
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

