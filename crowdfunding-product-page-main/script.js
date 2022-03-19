const back_this_prj_btn = document.querySelector(".back-this-prj-btn");
const select_btns = document.querySelectorAll(".select-btn");
const radio_btns = document.querySelectorAll("input[type='radio']");
const continue_btns = document.querySelectorAll(".continue-btn");
const close_btn_modal = document.querySelector(".close-icon-modal"); 
const inputs = document.querySelectorAll(".selection-modal input[type=text]");
const hamburger = document.querySelector(".icon-hamburger");
const cross_icon = document.querySelector(".icon-close");

const overlay = document.querySelector(".overlay");
const selection_modal = document.querySelector(".selection-modal");
const success_modal = document.querySelector(".success-modal");
const main_select_cards = document.querySelectorAll("main .select-card");
const selection_modal_select_cards = document.querySelectorAll(".selection-modal .select-card");

const finish_btn = document.querySelector(".finish-btn");
const bookmark_btn = document.querySelector(".bookmark-box");
const bookmark_text = document.querySelector(".bookmark-btn")

let number_left = [101,64,2];

const main_number_left = document.querySelectorAll("main .number-left .bold-text");
const selection_modal_number_left = document.querySelectorAll(".selection-modal .number-left .bold-text");

const total_collection = document.querySelector(".total-collection .bold-text");
const total_backers = document.querySelector(".total-backers .bold-text");

//Interaction for hamburger and cross-icon in mobile menu
hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("invisible");
    cross_icon.classList.remove("invisible");
});

cross_icon.addEventListener("click",()=>{
    hamburger.classList.remove("invisible");
    cross_icon.classList.add("invisible");
});

//Setting the first values for the number of stands left for each type. Uses the number left array
main_number_left.forEach((ele,index) =>{
    ele.textContent = number_left[index];
});

selection_modal_number_left.forEach((ele,index) =>{
    ele.textContent = number_left[index];
});

//Interaction for all the buttons
back_this_prj_btn.addEventListener("click",() => {
    overlay.classList.remove("hidden");
    selection_modal.classList.remove("hidden");
    radio_btns[0].checked = true;
});

continue_btns.forEach((continue_btn,index) => {
    continue_btn.addEventListener("click",() => {
        if(!isNaN(inputs[index].value)){
            if((index==1 && inputs[index].value>=25)||(index==2 && inputs[index].value>=75)||(index==3 && inputs[index].value>=200)||(index==0)){
                selection_modal.classList.add("hidden");
                success_modal.classList.remove("hidden");
                if(index!=0){
                    number_left[index-1]--;
                    main_number_left[index-1].textContent = `${number_left[index-1]} `;
                    selection_modal_number_left[index-1].textContent = `${number_left[index-1]}`;
                }
            }
        }
        inputs.forEach(input =>{
            input.value = "";
        });
    });
});

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

bookmark_btn.addEventListener("click",()=>{
    bookmark_btn.classList.toggle("bookmarked");
    if(bookmark_btn.classList.contains("bookmarked")){
        bookmark_text.textContent = "Bookmarked";
    }
    else{
        bookmark_text.textContent = "Bookmark";
    }
});

//Check for disabling the card using the number left in each type
setInterval(()=>{
    number_left.forEach((number,index) =>{
        if(number == 0){
            main_select_cards[index].classList.add("disabled");
            selection_modal_select_cards[index+1].classList.add("disabled");
            select_btns[index].textContent = "Out of Stock";
        }
        else{
            main_select_cards[index].classList.remove("disabled");
            selection_modal_select_cards[index+1].classList.remove("disabled");
            select_btns[index].textContent = "Select Reward";
        }
    })
},100);