const d = document.querySelector('.calci input');
const b = document.querySelectorAll('.btn button');

let currentInput = '';

b.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'AC':
                currentInput = '';
                d.value = '0';
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                d.value = currentInput || '0';
                break;
            case '=':
                try {
                    currentInput = eval(currentInput).toString();
                    d.value = currentInput;
                } catch (error) {
                    d.value = 'Error';
                }
                break;
            default:
                currentInput += value;
                d.value = currentInput;
                break;
        }
    });
});
