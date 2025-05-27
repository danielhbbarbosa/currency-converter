const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

function convertValues() {
    const inputValueToConvert = document.querySelector(".input-currency-value").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConvertedValue = document.querySelector(".currency-value")

    let dolarToday = 1
    let euroToday = 1
    let libraToday = 1
    let realToday = 1
    

    // Real
    if (currencySelectToConvert.value == "real") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValueToConvert)


        // Valor das moedas em Real
        dolarToday = 5.6619
        euroToday = 6.4438
        libraToday = 7.6809

   
    
        if (currencySelectConverted.value == "real") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValueToConvert / realToday)
        }

        if (currencySelectConverted.value == "dolar") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValueToConvert / dolarToday)
        }


        if (currencySelectConverted.value == "euro") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputValueToConvert / euroToday)
        }


        if (currencySelectConverted.value == "libra") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValueToConvert / libraToday)
        }


    }


    // Dólar
    if (currencySelectToConvert.value == "dolar") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueToConvert)


        // Valor das moedas em Dólar
        realToday = 0.1766379
        euroToday = 1.1381
        libraToday = 1.356


        if (currencySelectConverted.value == "dolar") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValueToConvert / dolarToday)
        }

        if (currencySelectConverted.value == "real") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValueToConvert / realToday)
        }


        if (currencySelectConverted.value == "euro") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputValueToConvert / euroToday)
        }


        if (currencySelectConverted.value == "libra") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValueToConvert / libraToday)
        }


    }


    // Euro
    if (currencySelectToConvert.value == "euro") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueToConvert)


        // Valor das moedas em Euro
        realToday = 0.1552168
        dolarToday = 0.8786574
        libraToday = 1.1920913


        if (currencySelectConverted.value == "dolar") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValueToConvert / dolarToday)
        }

        if (currencySelectConverted.value == "real") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValueToConvert / realToday)
        }


        if (currencySelectConverted.value == "euro") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputValueToConvert / euroToday)
        }


        if (currencySelectConverted.value == "libra") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValueToConvert / libraToday)
        }


    }


    // Libra
    if (currencySelectToConvert.value == "libra") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueToConvert)


        // Valor das moedas em Libra
        realToday = 0.1302643
        dolarToday = 0.7374631
        euroToday = 0.8393068


        if (currencySelectConverted.value == "dolar") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValueToConvert / dolarToday)
        }

        if (currencySelectConverted.value == "real") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValueToConvert / realToday)
        }


        if (currencySelectConverted.value == "euro") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR"
            }).format(inputValueToConvert / euroToday)
        }


        if (currencySelectConverted.value == "libra") {
            currencyConvertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValueToConvert / libraToday)
        }


    }

}

function changeCurrencyToConvert() {
    const currencyNameToConvert = document.querySelector("#currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-image-to-convert")
    const currencySign = document.querySelector(".currency-sign")

    if (currencySelectToConvert.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImageToConvert.src = "./assets/real.png"
        currencySign.innerHTML = "R$"
    }

    if (currencySelectToConvert.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png"
        currencySign.innerHTML = "$"
    }

    if (currencySelectToConvert.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png"
        currencySign.innerHTML = "€"
    }

    if (currencySelectToConvert.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assets/libra.png"
        currencySign.innerHTML = "£"
    }

    convertValues()
}

function changeCurrencyConverted() {
    const currencyNameConverted = document.querySelector("#currency-name-converted")
    const currencyImageConverted = document.querySelector(".currency-image-converted")

    if (currencySelectConverted.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImageConverted.src = "./assets/dolar.png"
    }

    if (currencySelectConverted.value == "euro") {
        currencyNameConverted.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro.png"
    }

    if (currencySelectConverted.value == "libra") {
        currencyNameConverted.innerHTML = "Libra"
        currencyImageConverted.src = "./assets/libra.png"
    }

    if (currencySelectConverted.value == "real") {
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/real.png"
    }

    convertValues()
}


currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)
