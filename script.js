const dropdownTrigger = document.querySelector('.dropdown-trigger');
const dropdownOptions = document.querySelector('.dropdown-options');
const optionItems = document.querySelectorAll('.option-item');
const currencyCode = document.querySelector('.currency-code');
const flagIcon = document.querySelector('.main-flag-icon');

dropdownTrigger.addEventListener('click', () => {
  dropdownOptions.classList.toggle('active');

  if (dropdownOptions.classList.contains('active')) {
    dropdownTrigger.setAttribute('aria-expanded', 'true');
  } else {
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  }
});

optionItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedFlagSrc = item.querySelector('.flag-icon').src;
    const selectedFlagAlt = item.querySelector('.flag-icon').alt;
    const selectedCode = item.getAttribute('data-value');

    const selectedCurrency = selectedCode;


    flagIcon.src = selectedFlagSrc;
    flagIcon.alt = selectedFlagAlt;
    currencyCode.innerText = selectedCode;

    dropdownOptions.classList.remove('active');
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', (event) => {
  if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
    dropdownOptions.classList.remove('active');
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  }
});

const convertButton = document.querySelector('.convert-buttom');

function convertCurrency() {
  const inputCurrencyValue = document.querySelector('.currency-input-convert').value;
  const currencyConverted = document.querySelector('.currency-input').value;

  const dolarToday = 5.1607;
  const euroToday = 5.9183;

  if (selectedCurrency == 'EUR') {
    currencyConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputCurrencyValue / euroToday);

  }

    if (selectedCurrency == 'USD') {
    currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputCurrencyValue / dolarToday);

  }
  console.log(currencyConverted);
}

convertButton.addEventListener('click', convertCurrency)