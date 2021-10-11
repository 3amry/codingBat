function endOther(a, b){
if (a.toLowerCase().slice(-b.length) === b.toLowerCase()) {
    return true;
  }

if (b.toLowerCase().slice(-a.length) === a.toLowerCase()) {
    return true;
  } 
else return false;
}