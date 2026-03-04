const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener("click", function handleClick(){
        var key = button.textContent;
        calculate(key);
    })
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
            //if(display.value.length>1)
            display.value=display.value.slice(0,-1);
            break;
        default:
            display.value+=key;
            break;
    }
    
}
// When user clicks a number button → display that number
// When user clicks an operator (+, -, *, /) → store it
// When user clicks another number → display the new number
// When user clicks "=" → calculate and show result
// When user clicks "C" → clear everything
// Handle decimal points (.)
// Key JavaScript concepts you'll need:

// Event listeners (addEventListener)
// DOM manipulation (getElementById, textContent)
// String/number operations
// eval() function (or build your own calculator logic)