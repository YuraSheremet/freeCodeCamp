function sumFibs(num) {
    let start = 0;
    let current = 1;
    let result = 0;
  
    while(current <= num) {
      if (current % 2 !== 0) {
        result += current;
      }
      let value = start + current;
      start = current;
      current = value;
    }
    return result;
}
  
sumFibs(4);