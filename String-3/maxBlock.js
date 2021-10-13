function maxBlock(str) {
  let block = "";
  let max = "";
  for (let i = 0; i < str.length; i++) {
    block = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) block += str[j];
      if (block.length > max.length) max = block;
      if (str[i] !== str[j]) break;
    }
  }
  return max.length;
}