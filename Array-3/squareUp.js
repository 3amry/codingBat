function squareUp(n){
  let set = n;
  let result = [];
  let input = 1;
  for (let i = n * n; i > 0; i--){
    if (input < set){
      result.unshift(input);
      input++;
    }
    if (input === set){
      result.unshift(input);
      let space = n - set;
      while (set < n && space > 0){
        result.unshift(0);
        space--;
      }
      input = 1;
      set--;
    }
  }
  return result;
}