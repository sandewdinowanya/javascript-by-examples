function calculate(operator) {
            let num1field = document.getElementById("num1");
            let num2field = document.getElementById("num2");
            let resultElement = document.getElementById("result");
            let result;
            let num1 = parseFloat(num1field.value);
            let num2 = parseFloat(num2field.value);

            // Clear previous styling
            resultElement.className = "result";

            // Check for single number operations
            const singleNumOps = ['sqrt', 'cbrt', 'sin', 'cos', 'tan', 'log'];
            
            if (singleNumOps.includes(operator)) {
                if (isNaN(num1)) {
                    result = "Please enter the first number!";
                    resultElement.classList.add("error");
                } else {
                    switch(operator) {
                        case 'sqrt':
                            result = num1 >= 0 ? Math.sqrt(num1) : "Cannot take square root of negative number";
                            break;
                        case 'cbrt':
                            result = Math.cbrt(num1);
                            break;
                        case 'sin':
                            result = Math.sin(num1 * Math.PI / 180); // Convert degrees to radians
                            break;
                        case 'cos':
                            result = Math.cos(num1 * Math.PI / 180);
                            break;
                        case 'tan':
                            result = Math.tan(num1 * Math.PI / 180);
                            break;
                        case 'log':
                            result = num1 > 0 ? Math.log10(num1) : "Cannot take log of non-positive number";
                            break;
                    }
                    if (typeof result === 'number') {
                        result = parseFloat(result.toFixed(10)); // Round to 10 decimal places
                        resultElement.classList.add("success");
                    } else {
                        resultElement.classList.add("error");
                    }
                }
            } else {
                // Two number operations
                if (isNaN(num1) || isNaN(num2)) {
                    result = "Please enter both numbers!";
                    resultElement.classList.add("error");
                } else {
                    switch(operator) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero";
                            break;
                        case '**':
                            result = Math.pow(num1, num2);
                            break;
                        case '%':
                            result = num2 !== 0 ? (num1 % num2) : "Cannot find modulo with zero";
                            break;
                        case 'min':
                            result = Math.min(num1, num2);
                            break;
                        case 'max':
                            result = Math.max(num1, num2);
                            break;
                        case 'avg':
                            result = (num1 + num2) / 2;
                            break;
                        default:
                            result = "Unknown operation";
                            resultElement.classList.add("error");
                    }
                    
                    if (typeof result === 'number' && !isNaN(result)) {
                        // Format result nicely
                        if (result % 1 === 0) {
                            result = result.toString(); // Keep integers as integers
                        } else {
                            result = parseFloat(result.toFixed(10)); // Round decimals
                        }
                        resultElement.classList.add("success");
                    } else if (typeof result !== 'string') {
                        result = "Error in calculation";
                        resultElement.classList.add("error");
                    } else {
                        resultElement.classList.add("error");
                    }
                }
            }

            resultElement.textContent = result;
        }

        // Clear functionality
        let clear = document.getElementById("clear");
        clear.addEventListener("click", function() {
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            let resultElement = document.getElementById("result");
            resultElement.textContent = 'Enter numbers and select an operation';
            resultElement.className = "result";
        });

        // Add keyboard support
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case '+':
                    calculate('+');
                    break;
                case '-':
                    calculate('-');
                    break;
                case '*':
                    calculate('*');
                    break;
                case '/':
                    event.preventDefault(); // Prevent default browser search
                    calculate('/');
                    break;
                case 'Enter':
                    calculate('+'); // Default to addition on Enter
                    break;
                case 'Escape':
                    document.getElementById("clear").click();
                    break;
            }
        });

        // Auto-focus first input on load
        window.onload = function() {
            document.getElementById("num1").focus();
        };
