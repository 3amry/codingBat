function fix34(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
      for (let j = nums.length - 1; j > 0; j--) {
        if (nums[j] === 4 && nums[j - 1] !== 3) {
          nums[j] = nums[i + 1];
          nums[i + 1] = 4;
        }
      }
    }
  }
  return nums;
}