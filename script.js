
const displayElement = document.getElementById("display");

function noRepeatOperator(op){
    let value = displayElement.value;
    // let lastChar = displayElement.value.slice(-1);
    
    if (value.includes(op)){
        // document.body.style.background = "yellow";
    }
    else{
        displayElement.value += op;
    }
}

function result(){
    if (displayElement.value == ""){

    }
    else{
        displayElement.value = eval(displayElement.value);
        // display.value = eval(display.value)
    }
}







