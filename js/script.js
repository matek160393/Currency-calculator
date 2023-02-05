let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-form__amount");
let currencyElement = document.querySelector(".js-form__currency");
let resultElement = document.querySelector(".js-form__result");
let exchangeCurrencyElement = document.querySelector(".form__exchangeCurrency");
let buttonElement = document.querySelector(".section__button");
let questionElement = document.querySelector(".section__question");

let EUR = 4.71;
let USD = 4.32;
let CZK = 0.19;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;

    switch (currencyElement.value) {
        case "EUR":
            result = amountElement.value / EUR;
            exchangeCurrencyElement.innerText = `${EUR}`;
            break;

        case "USD":
            result = amountElement.value / USD;
            exchangeCurrencyElement.innerText = `${USD}`;
            break;

        case "CZK":
            result = amountElement.value / CZK;
            exchangeCurrencyElement.innerText = `${CZK}`;
            break;
    }
    resultElement.innerText = `${(result.toFixed(2))}`;

});

buttonElement.addEventListener("click", () => {
    formElement.classList.toggle("form--hiden");

    if (formElement.classList.contains("form--hiden")) {
        buttonElement.innerText = "chcę ponownie przewalutować kwotę!"
        questionElement.innerText = "Dziękuje Ci za wybranie mojego kalkulatora walut ! 👍 "
    }
    else {
        buttonElement.innerText = "Tak"
        questionElement.innerText = "kończymy na dziś ?"
    };

});
