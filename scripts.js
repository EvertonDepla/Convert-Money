const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.3

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }





    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


function changeCurrency() {
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/logo-euro.png"
}

if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/logo-euro.png"
}

convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)