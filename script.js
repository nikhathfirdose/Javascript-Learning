var singleNumber = function (nums) {
  // perform XOR through the numbers.
  // the repeated numbers will cancel out and result
  // in the single number in the array.
  console.log(nums.reduce((result, num) => (result ^ num, 0)));
};
singleNumber([2, 2, 2, 2, 4, 5, 6, 5, 6]);
