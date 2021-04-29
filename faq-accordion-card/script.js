function dropdown(elem){
    let checkboxes=document.getElementsByClassName("checkbox");
    let checkbox = elem.parentElement.parentElement.childNodes[1];
    for(let i=0;i<checkboxes.length;i++){
        if(checkbox!=checkboxes[i]){
            checkboxes[i].checked = false;
        }
    }
    
}