const firstButtonElement = document.querySelector('#button-1')
const secondButtonElement = document.querySelector('#button-2')
const thirdButtonElement = document.querySelector('#button-3')

firstButtonElement.addEventListener('focus', () => {
  console.log('В фокусе: Кнопка 1')
})

secondButtonElement.addEventListener('focus', () => {
  console.log('В фокусе: Кнопка 2')
})

thirdButtonElement.addEventListener('focus', () => {
  console.log('В фокусе: Кнопка 3')
})
