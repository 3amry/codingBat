function makeBricks(small, big, goal){
  big = big * 5;
  if (big + small < goal)return false;
    return (goal % 5 <= small); 
}