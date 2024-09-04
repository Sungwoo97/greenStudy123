
const cleaveZen = window.cleaveZen
const {
  formatCreditCard,
  getCreditCardType,
  formatDate,
  formatGeneral,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
  unformatCreditCard,
} = cleaveZen

const main = () => {
  const creditcardInput = document.querySelector('#cc-number')
  const typeInput = document.querySelector('#cc-type')
  const dateInput = document.querySelector('#cc-exp-date')
  const cvvInput = document.querySelector('#cc-cvv')
  //const rawInput = document.querySelector('.creditcard-raw')
  registerCursorTracker({
    input: creditcardInput,
    delimiter: DefaultCreditCardDelimiter,
  })
  creditcardInput.addEventListener('input', e => {
    creditcardInput.value = formatCreditCard(e.target.value)
    typeInput.innerHTML = getCreditCardType(e.target.value)
    //rawInput.innerHTML = unformatCreditCard(e.target.value)
  })
  dateInput.addEventListener('input', (e) => {
    dateInput.value = formatDate(e.target.value, {
        datePattern: ['m', 'y'],
    })
  })
  cvvInput.addEventListener('input', (e) => {
    cvvInput.value = formatGeneral(e.target.value, {
        blocks: [3],
        numericOnly:true
    })
  })
}

main()