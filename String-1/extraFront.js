function extraFront(str) {
  if (str.length > 1) {
    return str.slice(0, 2).repeat(3);
  } else return str.repeat(3);
}
