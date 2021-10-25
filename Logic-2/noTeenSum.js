function noTeenSum(a, b, c){
  return fixTeen(a) + fixTeen(b) + fixTeen(c);
}
function fixTeen(num){
  if (num > 12 && num < 15 || num > 16 && num < 20)return 0;
  else return num;
}