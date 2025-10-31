

//Uzdevums 2.
let age = 24;

if (age >= 20) {
    console.log("Tu esi tiesīgs vēlēt!");
}
else{
    console.log("Tu neesi tiesīgs vēlēt!");
};
//Uzdevums 4.
function findMax(nums) {
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

var nums = [10, 132, 67, 23, 89];
console.log(findMax(nums));
