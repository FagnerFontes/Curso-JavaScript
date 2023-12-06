let b7Validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input')

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = b7Validator.checkInput(input)
            if (check !== true) {
                send = false;
                b7Validator.showError(input, check);
            }
        }
       
        if (send) {
            form.su
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules')

        if (rules !== null) {
            rules = rules.split('|')
            for (let k in rules) {
                let rdtails = rules[k].split('=')
                switch (rdtails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Este não pode estar vazio';
                        }
                        break;
                         case 'min':

                        break;
                }
            }
        }
        return true;
    },

    showError: (input, error) => {
        input.style.borderColor = '#FF0000'

        let errorElement = document.createElement('div')
        errorElement.classList.add('error')
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement, input.ElementSibling)
    }
};


let form = document.querySelector('.b7validator');
form.addEventListener('submit', b7Validator.handleSubmit);

console.log(5*100);