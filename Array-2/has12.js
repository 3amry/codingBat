function has12(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) return nums.slice(i).includes(2);
  }
  return false;
}