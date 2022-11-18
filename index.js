function Hover(input, input2) {
    document.getElementById(input).style.color = "orange";
    document.getElementsByClassName(input2)[0].style.color = "orange";    
}

function Leave(input , input2) {
    document.getElementById(input).style.color = "white";
    document.getElementsByClassName(input2)[0].style.color = "white";
}