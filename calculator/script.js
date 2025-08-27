function  calculate(operator){
    let num1field = document.getElementById("num1");
    let num2field = document.getElementById("num2");
    let clear = document.getElementById("clear");
    let result;

    let num1 = parseFloat(num1field.value);
    let num2 = parseFloat(num2field.value);

    if(operator === clear){ 
        num1field.value = '';
        num2field.value = '';
        document.getElementById("result").textContent = '';
        return; 
    }

    if(isNaN(num1) || isNaN(num2)){
        result = "Please enter both numbers!";
    }else{
        switch(operator){
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
                result = num2 !== 0 ? (num1 / num2) : "Can't divide by 0";
                break;   
        }
    }

    document.getElementById("result").textContent = result;

} 