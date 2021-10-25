function maxEnd3(nums){
  let max = (nums[0] > nums[2] ? nums[0] : nums[2]),
      result = [];
  for (let value of nums){
    result.push(max);
  }
  return result;
}