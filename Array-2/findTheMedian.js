function findTheMedian(nums) {
//   nums = nums.sort();
  if (nums.length % 2 === 0) {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
  if (nums.length % 2 === 1) return nums[Math.round(nums.length / 2 - 1)];
}