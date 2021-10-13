// platform error
function sameEnds(nums) {
  let result = "";
  for (let i = 0; i <= nums.length / 2; i++) {
    if (nums.slice(0, i) === nums.slice(nums.length - i))
      result = nums.slice(0, i);
  }
  return result;
}