const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener("click", function handleClick(){
        var key = button.textContent;
        calculate(key);
    });
});

function calculate(key){
    switch (key) {
        case "=":
            display.value=eval(display.value);
            break;
        case "AC":
            display.value="";
            break;
        case "D":
            display.value=display.value.slice(0,-1);
            break;
        default:
            display.value+=key;
            break;
    }
    
}