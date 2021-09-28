for (let e of document.querySelectorAll('.slider')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

const toggle_button = document.querySelector(".toggle");
const ball = document.querySelector(".ball");

toggle_button.addEventListener("click",()=>{
    if(ball.classList.contains("right")){
        ball.classList.remove("right");
    }
    else{
        ball.classList.add("right");
    }

    pageviews.innerHTML = pageview_values[slider.value-1];
    price.innerHTML = `$${price_values[slider.value-1].toFixed(2)}`;
    if(ball.classList.contains("right")){
        price.innerHTML = `$${(price_values[slider.value-1] - (price_values[slider.value-1]*25/100)).toFixed(2)}`;
    }
});

const pageviews = document.querySelector(".views");
const price = document.querySelector(".price");
const slider = document.querySelector(".slider");

let pageview_values = ['10k','50k','100k','500k','1M'];
let price_values = [8,12,16,24,36];

slider.oninput = () =>{
    pageviews.innerHTML = pageview_values[slider.value-1];
    price.innerHTML = `$${price_values[slider.value-1].toFixed(2)}`;
    if(ball.classList.contains("right")){
        price.innerHTML = `$${(price_values[slider.value-1] - (price_values[slider.value-1]*25/100)).toFixed(2)}`;
    }
}
