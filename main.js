let input = document.querySelector('input');
let button = document.querySelectorAll('button');
let string = '';

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText === 'AC') {
            string = '';
            input.value = string;
        }
        else if (e.target.innerText === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;            
        }
        else if (e.target.innerText === '=') {
            input.value = eval(string);
        
        }
        else {
            string += e.target.innerText;
            input.value = string;
        }
    });
});