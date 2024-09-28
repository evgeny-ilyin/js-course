const loginInputElement = document.querySelector('#login')
const passwordInputElement = document.querySelector('#password')
const submitButtonElement = document.querySelector('button[type="submit"]')

loginInputElement.addEventListener('blur', () => {
  console.log('Фокус ушел с элемента: поле ввода логина')
})

passwordInputElement.addEventListener('blur', () => {
  console.log('Фокус ушел с элемента: поле ввода пароля')
})

submitButtonElement.addEventListener('blur', () => {
  console.log('Фокус ушел с элемента: кнопка входа')
})
