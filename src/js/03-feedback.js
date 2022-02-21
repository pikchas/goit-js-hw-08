import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');

initForm()

form.addEventListener('submit', onFormSubmit);


form.addEventListener('input', throttle(e => {
    let formData = localStorage.getItem('feedback-form-state');

    formData = formData ? JSON.parse(formData) : {};

    formData[e.target.name] = e.target.value;

    if (formData) {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    }

    console.log(formData);
}, 500));

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
}

function initForm() {
    let formData = localStorage.getItem('feedback-form-state');

    if (!formData) return;

    console.log(formData);
}

