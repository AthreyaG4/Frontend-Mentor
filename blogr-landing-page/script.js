window.addEventListener("DOMContentLoaded",(e)=>{
    const cross = document.querySelector(".hamburger-icon");
    cross.addEventListener("click",(e)=>{
        if(cross.classList.contains("closed")){
            cross.classList.remove("closed");
            cross.classList.add("open");
            cross.src = "images/icon-close.svg";
        }
        else{
            cross.classList.remove("open");
            cross.classList.add("closed");
            cross.src="images/icon-hamburger.svg";
        }
    });
});