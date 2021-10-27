function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] !== 2 && nums[i - 1] !== 2) return false;
  }
  return true;
}