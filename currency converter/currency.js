

console.log("ad");
const exchangeRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.72,
        INR : 3,
    },
    EUR: {
        USD: 1.18,
        GBP: 0.85,
        INR : 3,
    },
    GBP: {
        USD: 1.39,
        EUR: 1.17,
        INR : 3,
    },
    INR : {
        USD : 2 ,
        EUR : 3 ,
        GBP : 5 ,
    }
};



function convertCurrency() {
    const targetCurrencySelect = document.getElementById('targetCurrency');
    const amountInput = document.getElementById('amount');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');
    const convertedAmount = document.getElementById('convertedAmount');
    const baseCurrencySelect = document.getElementById('baseCurrency');
    console.log("inside function");
    const baseCurrency = baseCurrencySelect.value;
    console.log(baseCurrency);
    const targetCurrency = targetCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (exchangeRates[baseCurrency] && exchangeRates[baseCurrency][targetCurrency]) {
        const rate = exchangeRates[baseCurrency][targetCurrency];
        const converted = (amount * rate).toFixed(2);
        convertedAmount.innerText = `${amount} ${baseCurrency} = ${converted} ${targetCurrency}`;
        resultDiv.style.display = 'block';
    } else {
        convertedAmount.innerText = 'Invalid currency selection';
        resultDiv.style.display = 'block';
    }
}



