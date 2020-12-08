/**
 * @param {number} carType
 * @return {boolean}
 */

const ParkingSystem = function(big, medium, small) {
    //  each new instance of a PS will have three properties for the number of each particular type of space
    //  depending on what values are passed in to the constructor
    this.big = big;
    this.medium = medium;
    this.small = small;
};

ParkingSystem.prototype.addCar = function(carType) {
    let answer = null;
    //  if carType is 1, and this.big >0 (and the other two sizes), there is no space for that car, so return false
    if (carType === 1 && this.big < 1 || carType === 2 && this.medium < 1 || carType === 3 && this.small < 1 ) {
        answer = false;
        //  otherwise we have space for that kind of car, so it is true, and decrement that particular space to show that
        //  we've parked one car in that type of space
    } else if (carType === 1) {
        answer = true;
        this.big--;
    } else if (carType === 2) {
        answer = true;
        this.medium--;
    } else if (carType === 3) {
        answer = true;
        this.small--;
    }
    return answer;
};



console.log(ParkingSystem([1],[1],[0]))

new Array.

