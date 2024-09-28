const loginInputElement = document.querySelector('#login')

loginInputElement.addEventListener('focus', () => {
  console.log('Полее ввода логина в фокусе!')
})

loginInputElement.addEventListener('blur', () => {
  console.log('Полее ввода логина потеряло фокус!')
})

// loginInputElement.focus()

setTimeout(() => {
  loginInputElement.blur()
}, 2000)