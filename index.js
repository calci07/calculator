const output = document.querySelector(".output");



function appendToDisplay(input){
output.value += input;
}



function clearDisplay(){
    output.value = "";
}


function calculate(){
    output.value = eval(output.value);
}