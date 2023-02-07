{
    const calculateResult = (amount, currency, EUR, USD, CZK) => {

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "CZK":
                return amount / CZK;
        }
    };

    const courseDisplay = (currency, EUR, USD, CZK) => {

        switch (currency) {
            case "EUR":
                return EUR;
            case "USD":
                return USD;
            case "CZK":
                return CZK;
        }
    };
    const updateResultText = (result, exchange) => {
        const resultElement = document.querySelector(".js-form__result");
        const exchangeCurrencyElement = document.querySelector(".form__exchangeCurrency");

        resultElement.innerText = `${(result.toFixed(2))}`;
        exchangeCurrencyElement.innerText = `${exchange}`;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const EUR = 4.71;
        const USD = 4.32;
        const CZK = 0.19;

        const amountElement = document.querySelector(".js-form__amount");
        const currencyElement = document.querySelector(".js-form__currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency, EUR, USD, CZK);
        const exchange = courseDisplay(currency, EUR, USD, CZK);
        updateResultText(result, exchange);
    };

    const init = () => {
        formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

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

    const finishingInteraction = () => {

        const buttonElement = document.querySelector(".js-section__button");
        buttonElement.addEventListener("click", toggleClassForm);

    };
    finishingInteraction();
};