function sum67(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      // add before 6 part
      let part = nums.splice(0, i);
      for (let num of part) sum += num;
      // delete 67 part
      let count = nums.indexOf(7) + 1;
      nums.splice(0, count);
      // reset index after splice ;)
      i = 0;
    }
  }
  for (let value of nums) sum += value;
  return sum;
}