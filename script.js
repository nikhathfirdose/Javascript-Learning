var singleNumber = function (nums) {
  // perform XOR through the numbers.
  // the repeated numbers will cancel out and result
  // in the single number in the array.
  return nums.reduce((result, num) => result ^ num, 0);
};
