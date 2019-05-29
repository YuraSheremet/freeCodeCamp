function destroyer(arr) {
    let args = Array.from(arguments);
    args.splice(0, 1);
    let target = args;

    return arr.filter(function(el) {
        return !target.includes(el);
    })
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));