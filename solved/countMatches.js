//  https://leetcode.com/problems/count-items-matching-a-rule/

//  You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
//
// The ith item is said to match the rule if one of the following is true:
//
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.
//
//
//
// Example 1:
//
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

//  initial solution (after quick refactor from for-loop)

const countMatches1 = function(items, ruleKey, ruleValue) {
    let count = 0;
    let tempIndex;
    if (ruleKey === "type") {
        tempIndex = 0;
    } else if (ruleKey === "color") {
        tempIndex = 1;
    } else {
        tempIndex = 2;
    }

    items.forEach((item) => {
        if (item[tempIndex] === ruleValue) {
            count++;
        }
    })
    return count;
};

//  Refactor - using an object rather than conditionals to handle the ruleKey

const countMatches2 = function(items, ruleKey, ruleValue) {
    let count = 0;

    const rules = {
        "type": 0,
        "color": 1,
        "name" : 2
    }

    items.forEach((item) => {
        if (item[rules[ruleKey]]=== ruleValue) {
            count++;
        }
    })
    return count;
};





console.log(countMatches1([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"))   //  returns 1
console.log(countMatches2([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "type", "phone"))   //  returns 2