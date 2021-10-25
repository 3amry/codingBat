function makeChocolate(small, big, goal){
  big = big * 5;
  if (goal > big + small)return -1;
  else if (goal < big) return goal % 5;
  else return goal - big;
}