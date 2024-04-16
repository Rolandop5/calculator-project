//calculator-project



const display = document.getElementById("calDisplay");

const appendDisplay = (input) => {
    display.value += input;
};



const clearDisplay = () => {
    display.value = "";
};





const calCalculate = () => {
    try {
        let calExpression = display.value;

        
        const operatorRegex = /[√\%\+\-\*\/]/;

        
        const calOperands = calExpression.split(operatorRegex).map(Number);

        
        const calOperators = calExpression.split('').filter(char => char.match(operatorRegex));

       
        let result = calOperands[0];

       
        for (let i = 0; i < calOperators.length; i++) {
            const calOperator = calOperators[i];
            const calOperand = calOperands[i + 1];
console.log(calOperator, calOperand)
            
            switch (calOperator) {
                
                case '+':
                    result += calOperand;
                    break;
                case '-':
                    result -= calOperand;
                    break;
                case '*':
                    result *= calOperand;
                    break;
                case '/':
                    if (calOperand === 0) {
                        throw new Error("Division by zero error");
                    }
                    result /= calOperand;
                    break;                
                    throw new Error("Invalid operator");
                    
                    case '%': 
                    result  /= 100;
                    break;
                case '√': 
                    result = Math.sqrt(calOperand);
                    break;
                default:
                    throw new Error("Invalid operator");

            }
        }

       
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
};



