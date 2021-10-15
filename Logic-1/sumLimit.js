function sumLimit(a, b){
  let sum = a + b;
  if (sum.toString().length === a.toString().length)return sum;
  else return a;
}