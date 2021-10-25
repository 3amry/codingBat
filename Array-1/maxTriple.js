function maxTriple(nums) {
  let big = 0;
  let midIndex = Math.round(nums.length / 2) - 1;
  nums[0] > nums[nums.length - 1]
    ? (big = nums[0])
    : (big = nums[nums.length - 1]);
  return big > nums[midIndex] ? big : nums[midIndex];
}