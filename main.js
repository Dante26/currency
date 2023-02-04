import './style.css';
import { betterNumber } from "./helpers.js";
import { validNum } from "./helpers.js";
import FetchWrapper from "./fetch-wrapper.js";


const API = new FetchWrapper(`https://api.frankfurter.app`);
const baseCurrency = document.querySelector("#base-currency");
const targetCurrency = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");
const selectedNum = document.querySelector("#selected-number");
const amount = document.querySelector("#amountId");


const init = () =>{

    if(baseCurrency.value === targetCurrency.value){
        result.textContent = validNum(amount.value);
        selectedNum.textContent = validNum(amount.value);
    }
    else{
        API.get(`/latest?amount=${validNum(amount.value)}&from=${baseCurrency.value}&to=${targetCurrency.value}`).then(data =>{
            result.textContent = betterNumber(data.rates[targetCurrency.value]);
            selectedNum.textContent = validNum(amount.value);
        });
    }
};


baseCurrency.addEventListener("change", event =>{
    init();
});

targetCurrency.addEventListener("change", event =>{
    init();
});

amount.addEventListener("change", event =>{
    init();
});


