function more14(nums){
  let count1 = 0,
      count4 = 0;
  for (let value of nums){
    if (value === 1)count1++;
    if (value === 4)count4++;
  }
  return (count1 > count4);
}