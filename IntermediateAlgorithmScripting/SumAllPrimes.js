function sumPrimes(num) {
  let array = [];
  let divider = 2;

  for (var i = divider; i <= num; i += 1) {
    isPrime(i, divider) && array.push(i);
  }

  return array.reduce(function(sum, item) {
    return sum + item;
  })
}

function isPrime(i, divider) {
  while (i > divider) {
    if (i % divider === 0) {
      return false;
    } else {
      divider++;
    }
  }
  return true;
} 

console.log(sumPrimes(10));