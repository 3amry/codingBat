function biggerTwo(a, b){
  let suma = a.reduce((a, b) => a + b);
  let sumb = b.reduce((a, b) => a + b);
  return sumb > suma ? b : a;
}