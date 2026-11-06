const HARSHAD_NUMBERS_LIMIT = 1000;

class HarshadNumbers {
    static printAll() {
        for (let number = 1; number <= HARSHAD_NUMBERS_LIMIT; number++) {
            if (number % HarshadNumbers.sumOfDigits(number) === 0) {
                console.log(number);
            }
        }
    }

    static sumOfDigits(number) {
        let sum = 0;
        while (number > 0) {
            let lastDigit = number % 10;
            sum += lastDigit;
            number = (number - lastDigit) / 10;
        }
        return sum;
    }
}

HarshadNumbers.printAll();
