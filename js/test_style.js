const singButton = document.querySelector('.button_ivent_reg')
const regForm = document.querySelector('.form_register')

singButton.addEventListener('click', function(){
    regForm.classList.add('active')
})