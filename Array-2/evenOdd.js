function evenOdd(nums) {
  let evens = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      temp = nums[i];
      nums[i] = nums[evens];
      nums[evens] = temp;
      evens++;
    }
  }
  return nums;
}