function blackjack(a, b){
  if (a > 21 && b > 21)return 0;
  if (Math.max(a, b) < 22)return Math.max(a, b);
  else return Math.min(a, b);
}