function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.concat(arr2).filter(function(elem) {
    if (!arr1.includes(elem) || !arr2.includes(elem)) {
      newArr.push(elem);
    }
  })
  return newArr;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);