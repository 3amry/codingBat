function fix23(nums){
  let result = [];
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === 3 && nums[i - 1] === 2)
      result.push(0);
    else result.push(nums[i]);
  }
  return result;
}