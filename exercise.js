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
    // console.log("Currency not supported.");
}
}

let  amount = 100;
let sourceCurrency = "UGX";
let targetCurrency = "KSH";

convertedAmount = convertCurrency(amount, sourceCurrency, targetCurrency);

// console.log("Converted Amount:", convertedAmount, targetCurrency);

students_age = {
    "Ethan": 20,
    "Druscillah":19,
    "Angel":18
}

// console.log("Druscillah's age:", students_age["Druscillah"]);


// QUESTION 2
// A function that checks the strength of a password

function check_password_strength(password) {

     password_array = password.split("");

    // console.log("Password size:", password.length);
    if (password.length < 8) {
      
    
        if (password_array.every(char => char >= '0' && char <= '9')) {
            console.log("Very weak password");
        } else {
            console.log("Weak password");
        }

    }else{
        // Strong password
        small_letters = "abcdefghijklmnopqrstuvwxyz"
        small_letters_array = small_letters.split("");

        capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        capital_letter_array = capital_letter.split("");

        special_character = "!@#$%^&*()_+-=[]{}|;':\",.<>/?"
        special_character_array = special_character.split("");

        numbers = "0123456789"
        numbers_array = numbers.split("");

        letter_count = 0;
        number_count = 0;
        special_character_count = 0;

        // check for a strong password
        for (let index = 0; index < password_array.length; index++) {
                const element = password_array[index];
                console.log("element:", element)

                if (element in small_letters_array || element in capital_letter_array) {
                    letter_count++;
            } 
            
            if (element in numbers_array) {
                    number_count++;
            }
            
            if (element in special_character_array) {
                    special_character_count++;
            }
        }

        console.log("Letter count:", letter_count);
        console.log("Number count:", number_count);
        console.log("Special character count:", special_character_count);

        if (letter_count > 0 && number_count > 0 && special_character_count > 0) {
            console.log("Very strong password");
        } else if (letter_count > 0 || number_count > 0 && special_character_count == 0) {
            console.log("Strong password");
    }
}
}

check_password_strength("abcdefgh12346");
    
