const formFeedback = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formFeedback.addEventListener('input', handleInput);
formFeedback.addEventListener('submit', handleSubmit);

checkField();

function handleInput(event) {
    
    const userData = {};
    userData.email = event.currentTarget.elements.email.value;
    userData.message = event.currentTarget.elements.message.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

    function checkField() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) { 
            event.currentTarget.elements.email.value = JSON.parse(saved.email);
            event.currentTarget.elements.message.value = SON.parse(saved.message);
        };
    };
};



function handleSubmit(event) {
    event.preventDefault();
    const savedLocalValue = localStorage.getItem(STORAGE_KEY);
    console.log(JSON.parse(savedLocalValue));
    localStorage.removeItem(STORAGE_KEY);
    formFeedback.reset();

};

































// form.addEventListener('input', handleInput);

// function handleInput(event) {
//     const localStorageValue = {};
//     localStorageValue.email = email.trim();
//     localStorageValue.message = message.trim();

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValue));

    
// };




