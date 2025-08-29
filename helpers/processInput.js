const { isNumberString, alternatingCaps } = require('./utils');

const USER_ID = "john_doe_17091999";
const EMAIL = "john@xyz.com";
const ROLL_NUMBER = "ABCD123";

function processData(inputData) {
    if (!Array.isArray(inputData)) {
        throw new Error("Input data must be an array");
    }

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    let flattenedInputs = [];
    inputData.forEach(el => {
        if (typeof el === "string") {
            if (/^[A-Za-z]+$/.test(el)) {
                for (let c of el) flattenedInputs.push(c);
            } else {
                flattenedInputs.push(el);
            }
        } else {
            flattenedInputs.push(String(el));
        }
    });

    for (let el of flattenedInputs) {
        if (isNumberString(el)) {
            let num = parseInt(el);
            sum += num;
            if (num % 2 === 0) {
                even_numbers.push(el);
            } else {
                odd_numbers.push(el);
            }
        } else if (/^[A-Za-z]$/.test(el)) {
            alphabets.push(el.toUpperCase());
        } else {
            special_characters.push(el);
        }
    }

    let concatAllAlphabets = flattenedInputs
        .filter(el => /^[A-Za-z]$/.test(el))
        .join('');
    concatAllAlphabets = concatAllAlphabets.split('').reverse().join('');
    let concat_string = alternatingCaps(concatAllAlphabets);

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
        concat_string,
    };
}

module.exports = { processData };
