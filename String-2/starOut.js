function starOut(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i - 1) === "*" ||
      str.charAt(i + 1) === "*" ||
      str.charAt(i) === "*"
    )
      continue;
    result += str.charAt(i);
  }
  return result;
}