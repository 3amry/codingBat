function withoutDoubles(die1, die2, noDoubles){
  if (noDoubles && die1 === die2){
    if (die1 === 6)die1 = 1;
    else die1++;
  }
  sum = die1 + die2;
  return sum;
}