function fix45(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 4) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 5 && nums[j - 1] !== 4) {
          nums[j] = nums[i + 1];
          nums[i + 1] = 5;
        }
      }
    }
  }
  return nums;
}
