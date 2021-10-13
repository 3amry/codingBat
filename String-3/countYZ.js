function countYZ(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "y" || str[i] === "z")
      if (
        str.charAt(i + 1).toLowerCase() === str.charAt(i + 1).toUpperCase() ||
        i === str.length - 1
      )
        count++;
  }
  return count;
}