class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mathGuess = Math.round((this.min + this.max) / 2);
        return this.mathGuess;
    }

    lower() {
        this.max = this.mathGuess;
    }

    greater() {
        this.min = this.mathGuess;
    }
}

module.exports = GuessingGame;
