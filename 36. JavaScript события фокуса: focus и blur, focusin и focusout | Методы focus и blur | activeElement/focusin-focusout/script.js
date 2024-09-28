document.addEventListener('focusin', (event) => {
  if (event.target.matches('#login')) {
    console.log('Полее ввода логина в фокусе!')
  }
})

document.addEventListener('focusout', (event) => {
  if (event.target.matches('#login')) {
    console.log('Полее ввода логина потеряло фокус!')
  }
})