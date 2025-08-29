const { isNumberString, alternatingCaps } = require('./utils');

const USER_ID = "devansh_kumar_gupta_11022005";
const EMAIL = "devanshkg19@gmail.com";
const ROLL_NUMBER = "22BCE10417";

function processData(inputData) {
    if (!Array.isArray(inputData)) {
        throw new Error("Input data must be an array");
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;

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
            alphabets.push(s.toUpperCase());
            concatPool += s;
        }
        else {
            special_characters.push(s);
        }
    });

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
