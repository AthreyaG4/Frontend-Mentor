let count=0;

function buttonclicked(){
    document.querySelector(".share").classList.toggle("dark-background");

    document.querySelector(".clicked").classList.toggle("bringup");

    if(count%2==0){
        document.querySelector(".popup").style.transform="scale(1,1)";
    }
    else{
        document.querySelector(".popup").style.transform="scale(1,0)";
    }
    count++;
}