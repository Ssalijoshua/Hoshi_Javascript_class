// Number 1 
// Currency conversion function

function convertCurrency(amount, sourceCurrency, targetCurrency){
     
rates = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75
}

if (sourceCurrency in rates && targetCurrency in rates) {
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];
    const convertedAmount = (amount / sourceRate) * targetRate;
    return convertedAmount;
} else {
    console.log("Currency not supported.");
}
}

let  amount = 100;
let sourceCurrency = "USD";
let targetCurrency = "EUR";

convertedAmount = convertCurrency(amount, sourceCurrency, targetCurrency);

// console.log("Converted Amount:", convertedAmount, targetCurrency);

students_age = {
    "Ethan": 20,
    "Druscillah":19,
    "Angel":18
}

// console.log("Druscillah's age:", students_age["Druscillah"]);