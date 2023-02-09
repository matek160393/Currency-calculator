{
    const calculateResult = (amount, currency, exchange) => {

        switch (currency) {
            case "EUR":
                return amount / exchange;
            case "USD":
                return amount / exchange;
            case "CZK":
                return amount / exchange;
        }
    };

    const courseDisplay = (currency) => {
        const EUR = 4.71;
        const USD = 4.32;
        const CZK = 0.19;

        switch (currency) {
            case "EUR":
                return EUR;
            case "USD":
                return USD;
            case "CZK":
                return CZK;
        }
    };
    const updateResultText = (result, exchange, currency) => {
        const resultElement = document.querySelector(".js-form__result");
        const exchangeCurrencyElement = document.querySelector(".js-form__exchangeCurrency");

        resultElement.innerText = `${(result.toFixed(2))} ${currency}`;
        exchangeCurrencyElement.innerText = `1 PLN = ${exchange} ${currency}`;
    };

    const toggleClassForm = () => {

        formElement.classList.toggle("form--hiden");
        updateTextButton();

    }

    const updateTextButton = () => {
        const textButton = document.querySelector(".js-section__textButton");
        const questionElement = document.querySelector(".js-section__question");

        textButton.innerText = formElement.classList.contains("form--hiden")
            ? "chcę ponownie przewalutować kwotę !"
            : "Tak";

        questionElement.innerText = formElement.classList.contains("form--hiden")
            ? "dziękuje Ci za wybranie mojego kalkulatora walut"
            : "kończymy na dziś ?";
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__amount");
        const currencyElement = document.querySelector(".js-form__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        
        const exchange = courseDisplay(currency);
        const result = calculateResult(amount, currency, exchange);
        
        updateResultText(result, exchange, currency);
    };

    const init = () => {
        formElement = document.querySelector(".js-form");
        const buttonElement = document.querySelector(".js-section__button");
        buttonElement.addEventListener("click", toggleClassForm);
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
};