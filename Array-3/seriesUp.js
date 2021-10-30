function seriesUp(n) {
  let result = [];
  let input = 1;
  let set = 1;
  while (set <= n) {
    result.push(input);
    if (input === set) {
      set++;
      input = 1;
      continue;
    }
    input++;
  }
  return result;
}