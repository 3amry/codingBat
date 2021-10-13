function sumDigits(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i].toUpperCase())
      result += parseInt(str[i]);
  }
  return result;
}