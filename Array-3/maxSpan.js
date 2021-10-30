function maxSpan(nums) {
  if (nums.length === 0) return 0;
  let maxSpan = 1;
  for (let i = 0; i < nums.length / 2; i++) {
    for (let j = nums.length - 1; j >= nums.length / 2; j--) {
      if (nums[i] === nums[j] && j - i + 1 > maxSpan) maxSpan = j - i + 1;
    }
  }
  return maxSpan;
}