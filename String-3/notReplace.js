function notReplace(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (i - 1 >= 0 && isLetter(str[i - 1])) ||
      (i + 2 < str.length && isLetter(str[i + 2]))
    )
      result += str[i];
    else if (str.slice(i, i + 2) === "is") {
      result += "is not";
      i++;
    }
    else result += str[i];
  }
  return result;
}
function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}