function uniteUnique(arr) {
    let args = [...arguments];

    return args.reduce(function(a, b) {
        return a.concat(b.filter(function(subArr) {
            return a.indexOf(subArr) < 0;
        }))
    })
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);