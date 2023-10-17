const toggleBtn = document.getElementById('toggle-input')
const monthlyLabel = document.querySelector('.monthly')
const yearlyLabel = document.querySelector('.yearly')
const prices = document.querySelectorAll('.price-container')
const billers = document.querySelectorAll('.billed')

const yearlyPrice = [38, 98, 79]
const monthlyPrice = [4, 12, 7]

toggleBtn.addEventListener('click', () => {
  // toggle.checked
  if(toggleBtn.checked) {
    yearlyLabel.classList.add('bold')
    monthlyLabel.classList.remove('bold')
    billers.forEach(biller => {
      biller.textContent = '/yr'
    })
    handleChangePrice(true)
  } else {
    monthlyLabel.classList.add('bold')
    yearlyLabel.classList.remove('bold')
    billers.forEach(biller => {
      biller.textContent = '/mo'
    })
    handleChangePrice(false)
  }
})

const handleChangePrice = (isCheck) => {
  isCheck ? prices.forEach((price, index) => {
    price.textContent = `$${yearlyPrice[index]}`
  })
  : prices.forEach((price, index) => {
    price.textContent = `$${monthlyPrice[index]}`
  })
}