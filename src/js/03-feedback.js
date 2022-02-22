import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

let formData = {};
const KEY = 'feedback-form-state';

initForm()

form.addEventListener('submit', onFormSubmit);


form.addEventListener('input', throttle(e => {
    let formData = localStorage.getItem(KEY);

    formData = formData ? JSON.parse(formData) : {};

    formData[e.target.name] = e.target.value;

    if (formData) {
        localStorage.setItem(KEY, JSON.stringify(formData))
    }

    console.log(formData);
}, 500));

function onFormSubmit(e) {
    e.preventDefault();

    const formEl = e.currentTarget.elements;
    const email = formEl.email.value;
    const message = formEl.message.value;

    if (!email || !message) {
        alert('Все поля должны быть заполнены!');
        return;
    }

    localStorage.removeItem(KEY);
    e.currentTarget.reset();
}

function initForm() {
    const savedMessage = JSON.parse(localStorage.getItem(KEY));

    if (savedMessage) {
        input.value = savedMessage.email;
        textarea.value = savedMessage.message;
        formData = savedMessage;
    };

    console.log(formData);
}

