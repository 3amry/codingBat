function tenRun(nums) {
  let temp = 1;
  let result = [];
  for (let value of nums) {
    if (value % 10 === 0) temp = value;
    if (value % 10 !== 0 && temp !== 1) result.push(temp);
    else result.push(value);
  }
  return result;
}