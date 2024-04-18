//calculator-project


// Accessing the HTML element with the id "calDisplay"

const display = document.getElementById("calDisplay");

// Function to append input to the display
const appendDisplay = (input) => {
    
// Remove the last character from the display value DELETE button
    if (input === 'DEL') {
        
        display.value = display.value.slice(0, -1);
    } else {
    display.value += input;

    
           }

        }

// Function to clear the display
const clearDisplay = () => {
    display.value = "";
};



// Function to perform the calculation
const calCalculate = () => {
    try {
        // Getting the expression from the display
        let calExpression = display.value;

        // Regular expression to match operators (+, -, *, /, %, √)
        const operatorRegex = /[√\%\+\-\*\/]/;

        // Splitting the expression into operands and converting them to numbers
        const calOperands = calExpression.split(operatorRegex).map(Number);

        // Extracting the operators from the expression
        const calOperators = calExpression.split('').filter(char => char.match(operatorRegex));

        // Initializing the result with the first operand
        let result = calOperands[0];

        



       // Looping through the operators and operands to perform the calculation
        for (let i = 0; i < calOperators.length; i++) {
            const calOperator = calOperators[i];
            const calOperand = calOperands[i + 1];
            
            console.log(calOperator, calOperand)
            
            // Performing the calculation based on the operator
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

                     // Handling division by zero
                case '/':
                    if (calOperand === 0) {
                        throw new Error("Division by zero error");
                    }
                    result /= calOperand;
                    break;                
                    throw new Error("Invalid operator");
                   
                    // Calculating percentage
                    case '%': 
                    result  /= 100;
                    break;

                     // Calculating square root

                case '√': 
                    result = Math.sqrt(calOperand);
                    break;
                default:
                    throw new Error("Invalid operator");

            }
        }

       // Displaying the result
        display.value = result;
    } catch (error) {
        // Handling errors by displaying "Error"

        display.value = "Error";
    }
};



