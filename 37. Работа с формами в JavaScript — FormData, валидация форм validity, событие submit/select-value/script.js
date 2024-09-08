const formElement = document.querySelector('form')
const citySelectElement = formElement.city

/* Получение значения */
console.log('Все опции:', citySelectElement.options)
console.log('Индекс выбранной опции:', citySelectElement.selectedIndex)
console.log(
  'Текущее значение:',
  /**
   * То же, что и:
   * citySelectElement.value
   */
  citySelectElement.options[citySelectElement.selectedIndex].value
)

/* Установка нового значения */
citySelectElement.options[4].selected = true

/* Получение значения */
console.log('Текущее значение:', citySelectElement.value)