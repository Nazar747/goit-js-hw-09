const formData = {
  email: '',
  message: '',
};
const LS_Key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

const saved = JSON.parse(localStorage.getItem(LS_Key) || '{}');
formData.email = saved.email || '';
formData.message = saved.message || '';

input.value = formData.email;
textarea.value = formData.message;

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }
  localStorage.setItem(LS_Key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    event.target.elements.message.value === '' ||
    event.target.elements.email.value === ''
  ) {
    return alert('Fill please all fields');
  }
  console.log(formData);

  formData.email = '';
  formData.message = '';
  localStorage.removeItem(LS_Key);
  form.reset();
});
