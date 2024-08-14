module.exports = function toReadable(number) {
    const num = String(number).split("");
    let str = "";
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num.length === 3) {
        str += `${units[num[0]]} hundred `;

        if (num[1] > "1") {
            str += `${tens[num[1]]} `;
            if (num[2] > "0") {
                str += `${units[num[2]]} `;
            }
        } else if (num[1] === "1") {
            str += `${teens[num[2]]} `;
        } else if (num[1] === "0" && num[2] > "0") {
            str += `${units[num[2]]}`;
        }
    }

    if (num.length === 2) {
        if (num[0] > "1") {
            str += `${tens[num[0]]} `;
            if (num[1] > "0") {
                str += `${units[num[1]]} `;
            }
        } else if (num[0] === "1") {
            str += `${teens[num[1]]} `;
        }
    }

    if (num.length === 1) {
        str += `${units[num[0]]}`;
    }

    return str.trim();
};
