let sum = "";
let decimalCheck = []

function addToSum(operator) {
    switch(operator){

        case `.` :
        if(decimalCheck.includes(`.`)){
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
          if(!document.getElementById('output').innerText.endsWith(operator)){
            sum = sum + operator;
            document.getElementById("output").innerText = sum;
            decimalCheck = []
          }
          // if(document.getElementById('output').innerText.endsWith(`+`)){
          //   document.getElementById('output').innerText = document.getElementById('output').innerText
          // }
          // else{
          //   sum += operator
          //   document.getElementById('output').innerText = sum
          //   symbolCheck.push(operator)
          // }
          break; 
        // case `-`:
        // case `*`:
        // case `/`:
        //     sum = sum + operator;
        //     document.getElementById("output").innerText = sum;
        //     decimalCheck = []

        // break;

        default:
            sum = sum + operator;
            document.getElementById("output").innerText = sum;
            decimalCheck.push(operator)
            console.log((document.getElementById('output').innerText))

    }
}

function evaluateSum() {
  document.getElementById("output").innerText = eval(document.getElementById('output').innerText).toFixed(2);
}

function clearSum() {
  sum = "";
  document.getElementById("output").innerText = sum;
  decimalCheck = []
}

function backspace() {
  // sum = sum.slice(0, -1);
  // document.getElementById("output").innerText = sum;
  document.getElementById('output').innerText = document.getElementById('output').innerText.slice(0,-1)
  decimalCheck.pop()
}

