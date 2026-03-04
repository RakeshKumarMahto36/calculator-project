const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener("click", function handleClick(){
        var key = button.textContent;
        calculate(key);
    });
});

document.addEventListener("keydown", function (Event) {
    calculate(Event.key);
});

function calculate(key){
    switch (key) {
        case "=":
            display.value=eval(display.value);
            break;
        case 'Enter':
            display.value=eval(display.value);
            break;
        case "AC":
            display.value="";
            break;
        case 'Escape':
            display.value="";
            break;
        case "D":
            display.value=display.value.slice(0,-1);
            break;
        case 'Backspace':
            display.value=display.value.slice(0,-1);
            break;
        case "(":
            display.value+=key;
            break;
        case ")":
            display.value+=key;
            break;
        case "/":
            display.value+=key;
            break;
        case "7":
            display.value+=key;
            break;
        case "8":
            display.value+=key;
            break;       
        case "9":
            display.value+=key;
            break;
        case "*":
            display.value+=key;
            break;
        case "4":
            display.value+=key;
            break;
        case "5":
            display.value+=key;
            break;
        case "6":
            display.value+=key;
            break;
        case "-":
            display.value+=key;
            break;
        case "1":
            display.value+=key;
            break;
        case "2":
            display.value+=key;
            break;
        case "3":
            display.value+=key;
            break;
        case "+":
            display.value+=key;
            break;
        case "0":
            display.value+=key;
            break;
        case ".":
            display.value+=key;
            break;
        default:
            break;
    }
    
}