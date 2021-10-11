function mixString(a, b){
  let result = "";
  let maxLength = Math.max(a.length, b.length);
  for (let i = 0; i < maxLength; i++) {
    result += a.charAt(i) + b.charAt(i);
  }
  return result;
}