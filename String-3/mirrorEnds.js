function mirrorEnds(string) {
  let result = "";
  let temp = "";
  for (let i = 0; i < string.length; i++) {
    temp = string[i] + temp;
    if (temp === string.slice(string.length - i - 1))
      result = string.slice(0, i + 1);
  }
  return result;
}