function notAlone(nums, val) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] === val && nums[i - 1] !== val)
      nums[i] = Math.max(nums[i - 1], nums[i + 1]);
  }
  return nums;
}