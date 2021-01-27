const researchSquare = function() {
    for (let i = 1; i <= 50; i++) {
        if (i % 15 === 0) {
            console.log("Research_Square");
        } else  if (i % 3 === 0) {
            console.log("Research");
        } else  if (i % 5 === 0) {
            console.log("Square");
        } else {
            console.log(i);
        }
    }
};

