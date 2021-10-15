function greenTicket(a, b, c){
  if (a !== b && b !== c && a !== c)return 0;
  else if (a === b && b === c)return 20;
  else if (a === b || b === c || a === c)return 10;
}