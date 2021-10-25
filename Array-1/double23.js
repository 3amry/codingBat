function double23(nums){
  let count2 = 0,
      count3 = 0;
  for (let value of nums){
    if (value === 2) count2++;
    if (value === 3) count3++;
  }
  if (count2 > 1 || count3 > 1)return true;
  else return false;
}