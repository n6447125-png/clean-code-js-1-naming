const os = require('os');

const CORNER = '+';
const VERTICAL_BORDER = '|';
const HORIZONTAL_BORDER = '-';
const KEY_VALUE_SEPARATOR = ' _ ';

function repeatSymbol(symbol, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += symbol;
    }
    return result;
}

function formatKeyValue(key, value) {
    const content = key + KEY_VALUE_SEPARATOR + value;
    const horizontalLine = repeatSymbol(HORIZONTAL_BORDER, content.length);

    return CORNER + horizontalLine + CORNER + os.EOL
         + VERTICAL_BORDER + content + VERTICAL_BORDER + os.EOL
         + CORNER + horizontalLine + CORNER + os.EOL;
}

function main() {
    console.log(formatKeyValue('enable', 'true'));
    console.log(formatKeyValue('name', 'Bob'));
}

main();
