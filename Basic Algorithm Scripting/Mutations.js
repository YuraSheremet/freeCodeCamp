function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function(elem) {
      if (arr[0].toLowerCase().indexOf(elem) === -1) {
        return false;
      } else {
        return true;
      }
    });
}
  
mutation(["hello", "hey"]);