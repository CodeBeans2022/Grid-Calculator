let display = document.getElementById('output');

let buttons = Array.from(document.getElementsByClassName('userInput'));

buttons.map(userInput => {

    userInput.addEventListener('click', (e) => {

        switch (e.target.innerText) {

            case 'Clear':
                display.innerText = '';
                break;

            case 'Back':
                if (display.innerText) {

                    display.innerText = display.innerText.slice(0, -1);

                }
                break;

            case '=':
                display.innerText = eval(display.innerText);
                break;

            default:
                display.innerText += e.target.innerText;
        }

    });

});