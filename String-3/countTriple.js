function countTriple(str){
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 1] && str[i] === str[i + 2]) count++;
  }
  return count;
}