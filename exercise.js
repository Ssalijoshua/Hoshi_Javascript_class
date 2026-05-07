// --- QUESTION 1: Currency Conversion ---
function convertCurrency(amount, sourceCurrency, targetCurrency) {
    const rates = {
        "USD": 1,
        "EUR": 0.85,
        "GBP": 0.75
    };

    if (rates[sourceCurrency] && rates[targetCurrency]) {
        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];
        return (amount / sourceRate) * targetRate;
    } else {
        // return "Currency not supported."; 
    }
}

// Test Q1
console.log(convertCurrency(100, "USD", "EUR")); // Works
console.log(convertCurrency(100, "UGX", "KSH")); // "Currency not supported."

// --- QUESTION 2: Password Strength ---
function check_password_strength(password) {
    const len = password.length;
    
    // Check if it's strictly numbers and short
    const isOnlyNumbers = /^\d+$/.test(password);

    if (len < 8) {
        if (isOnlyNumbers) {
            console.log("Very weak password");
        } else {
            console.log("Weak password");
        }
        return; // Exit early
    }

    // Use RegEx for cleaner checking
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/.test(password);

    if (hasLetters && hasNumbers && hasSpecial) {
        console.log("Very strong password");
    } else if (hasLetters && hasNumbers) {
        console.log("Strong password");
    } else {
        console.log("Moderate password");
    }
}

check_password_strength("abcdefgh12346"); 