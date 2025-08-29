const { isNumberString, alternatingCaps } = require('./utils');

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

function processData(inputData) {
    if (!Array.isArray(inputData)) {
        throw new Error("Input data must be an array");
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;

    // Collect for concat only
    let concatPool = "";

    inputData.forEach(el => {
        const s = String(el);
        if (isNumberString(s)) {
            const num = parseInt(s, 10);
            sum += num;
            if (num % 2 === 0) even_numbers.push(s);
            else odd_numbers.push(s);
        }
        else if (/^[A-Za-z]+$/.test(s)) {
            // Preserve the whole string, uppercase for alphabets array
            alphabets.push(s.toUpperCase());
            // Accumulate original characters for concat logic
            concatPool += s;
        }
        else {
            special_characters.push(s);
        }
    });

    // Build concat_string: reverse the pooled characters then alternating caps
    const reversed = concatPool.split('').reverse().join('');
    const concat_string = alternatingCaps(reversed);

    return {
        is_success: true,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: String(sum),
        concat_string
    };
}

module.exports = { processData };
