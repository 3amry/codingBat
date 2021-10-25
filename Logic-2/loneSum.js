function loneSum(a, b, c){
  let result = 0;
  if (a !== b && a !== c) result += a;
  if (b !== c && b !== a) result += b;
  if (c !== b && c !== a) result += c;
  return result;
}