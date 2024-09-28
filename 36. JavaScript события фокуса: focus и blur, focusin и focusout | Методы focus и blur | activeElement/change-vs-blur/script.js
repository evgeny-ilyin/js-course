const loginInputElement = document.querySelector('#login')

loginInputElement.addEventListener('blur', () => {
  const isLoginEmpty = loginInputElement.value.length === 0

  loginInputElement.classList.toggle('is-invalid', isLoginEmpty)
})

loginInputElement.addEventListener('focus', () => {
  loginInputElement.classList.remove('is-invalid')
})