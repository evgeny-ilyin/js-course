const loginInputElement = document.querySelector('#login')
const passwordInputElement = document.querySelector('#password')
const submitButtonElement = document.querySelector('button[type="submit"]')

loginInputElement.addEventListener('focus', () => {
  console.log('В фокусе: поле ввода логина')
})

passwordInputElement.addEventListener('focus', () => {
  console.log('В фокусе: поле ввода пароля')
})

submitButtonElement.addEventListener('focus', () => {
  console.log('В фокусе: кнопка входа')
})
