function plusOut(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) === word) {
      result += word;
      i += word.length - 1;
    } else result += "+";
  }
  return result;
}
