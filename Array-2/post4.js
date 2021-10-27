function post4(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 4) return nums.slice(i + 1);
  }
}