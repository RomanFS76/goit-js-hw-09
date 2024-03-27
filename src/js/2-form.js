const formFeedback = document.querySelector('.feedback-form');

const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const savedLocalValue = localStorage.getItem(STORAGE_KEY);

formFeedback.addEventListener('input', handleInput);
formFeedback.addEventListener('submit', handleSubmit);

checkField();

function handleInput(event) {
	const formInput = event.currentTarget.elements;

	const userData = {};
	userData.email = formInput.email.value.trim();
	userData.message = formInput.message.value.trim();
	
	localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
};

function checkField() {
    const getLocalValue = JSON.parse(savedLocalValue);

    if (savedLocalValue) {
			inputEl.value = getLocalValue.email;
			textareaEl.value = getLocalValue.message;
    };
};

function handleSubmit(event) {
	event.preventDefault();
	const formSubmit = event.target.elements;

	if (formSubmit.email.value === '' || formSubmit.message.value === '') {
		return alert('All form fields must be filled in');
	};

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




