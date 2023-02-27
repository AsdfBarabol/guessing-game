let minporog;
let maxporog;
let result;
class GuessingGame {
    
    constructor() {      
    }
    setRange(min, max) {
         minporog = min;
         maxporog = max;
    }
    guess() {
        result = maxporog - Math.floor((maxporog-minporog)/2);
        return result;
    }
    lower() {
        maxporog = result;
    }
    greater() {
        minporog = result;
    }
}

module.exports = GuessingGame;
