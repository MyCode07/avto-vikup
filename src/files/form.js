"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contacts__form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        form.classList.add('_sending');

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            let response = await fetch('files/sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                // document.querySelector('.thanks').classList.add('_open');
                // document.querySelector('.wrapper').classList.add('_noscroll');
                window.location.href = 'thanks.html';
                form.classList.remove('_sending');
            }
            else {
                form.classList.remove('_sending');
                alert('Ошибка');
            }
        }
        else {
            form.classList.remove('_sending');
            alert('Заполните все поля');
        }
    }

    const form2 = document.querySelector('.popup__form');
    form2.addEventListener('submit', formSend2);

    async function formSend2(e) {
        e.preventDefault();
        form.classList.add('_sending');

        let error = formValidate(form2);

        let formData = new FormData(form2);

        if (error === 0) {
            let response = await fetch('files/sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                // document.querySelector('.thanks').classList.add('_open');
                // document.querySelector('.wrapper').classList.add('_noscroll');
                window.location.href = 'thanks.html';
                form.classList.remove('_sending');
            }
            else {
                form.classList.remove('_sending');
                alert('Ошибка');
            }
        }
        else {
            form.classList.remove('_sending');
            alert('Заполните все поля');
        }
    }

    function formValidate(forma) {
        let error = 0;
        let formReq = forma.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
        return error;
    }
    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }
});

