function smallestCommons(arr) {
    arr.sort( (a, b) => a - b ); 
    let [devider, num] = arr;
  
    while(devider <= arr[1]) {
      if (num % devider === 0) {
        devider++;
      } else {
        num += arr[1];
        devider = arr[0];
      }
    }
    return num;
}
    
smallestCommons([1,5]);