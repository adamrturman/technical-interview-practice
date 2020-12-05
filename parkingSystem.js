/**
 * @param {number} carType
 * @return {boolean}
 */

const ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};


ParkingSystem.prototype.addCar = function(carType) {
    let answer = null;
    //  if carType is 1, and this.big >0, subtract it from the integer in this.big
    if (carType === 1 && this.big < 1 || carType === 2 && this.medium < 1 || carType === 3 && this.small < 1 ) {
        answer = false;
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
    //  if carType is 2, and this.medium >0,subtract it from the integer in this.medium
    //  if carType is 3, and this.small  >0,subtract it from the integer in this.small
};



console.log(ParkingSystem([1],[1],[0]))

