function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, curr) {
            return (curr > prev)? curr : prev;
        })
    })
}

largestOfFour();