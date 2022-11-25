let sum = "";
let decimalCheck = []

function addToSum(operator) {
    switch(operator){
        case `,` :
        if(decimalCheck.includes(`,`)){
            document.getElementById('output').innerText = document.getElementById('output').innerText
        } 
        else{
            sum += operator
            document.getElementById('output').innerText = sum
            decimalCheck.push(operator)
        }
        break;
        case `+`:
        case `-`:
        case `*`:
        case `/`:
            sum = sum + operator;
            document.getElementById("output").innerText = sum;
            decimalCheck = []
        break;
        default:
            sum = sum + operator;
            document.getElementById("output").innerText = sum;
            decimalCheck.push(operator)
            operatorCheck.push(operator)
    }
}

function evaluateSum() {
  document.getElementById("output").innerText = eval(sum);
}

function clearSum() {
  sum = "";
  document.getElementById("output").innerText = sum;
  decimalCheck = []
}

function backspace() {
  sum = sum.slice(0, -1);
  document.getElementById("output").innerText = sum;
  decimalCheck.pop()
}

