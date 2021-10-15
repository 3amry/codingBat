function maxMod5(a, b){
  if (a === b)return 0;
  else if (a % 5 === b % 5){
    return (a < b) ? a : b;
  }
  else return (a > b) ? a : b;
}