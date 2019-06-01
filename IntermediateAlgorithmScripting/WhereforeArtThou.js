function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    
    return collection.filter(function(obj) {
        for (var key of keys) {
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }
        }
        return true;
    })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
