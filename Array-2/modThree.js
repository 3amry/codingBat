function modThree(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0 && nums[i + 2] % 2 === 0)
      return true;
    if (nums[i] % 2 === 1 && nums[i + 1] % 2 === 1 && nums[i + 2] % 2 === 1)
      return true;
  }
  return false;
}