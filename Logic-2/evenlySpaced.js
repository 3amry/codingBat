function evenlySpaced(a, b, c) {
  return max(a, b, c) - mid(a, b, c) === mid(a, b, c) - min(a, b, c);
}
function max(a, b, c) {
  return Math.max(a, b) > c ? Math.max(a, b) : c;
}
function min(a, b, c) {
  return Math.min(a, b) < c ? Math.min(a, b) : c;
}
function mid(a, b, c) {
  return a + b + c - min(a, b, c) - max(a, b, c);
}
