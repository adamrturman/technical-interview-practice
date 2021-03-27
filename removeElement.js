

const removeElement = function(nums, val) {
    const answer = nums.filter(element => {
        if (element !== val) {
            return element;
        }
    });
    return answer.length;
};

console.log(removeElement([3,2,2,3], 3))