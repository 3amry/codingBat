function withoutString(base, remove) {
  let result = "";
  for (let i = 0; i < base.length; i++) {
    if (
      base.slice(i, i + remove.length).toLowerCase() === remove.toLowerCase()
    ) {
      i += remove.length - 1;
      continue;
    }
    result += base.charAt(i);
  }
  return result;
}