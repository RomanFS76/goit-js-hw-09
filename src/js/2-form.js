const feedbackForm = document.querySelector('.feedback-form');
const inputEL = document.querySelector('input');
const textareaEL = document.querySelector('textarea');


const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target.elements;
    const email = form.email.value;
    const message = form.message.value;
    
    const localStorageValue = {};
    localStorageValue.email = email.trim();
    localStorageValue.message = message.trim();

    console.log(localStorageValue);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValue));

};
 




