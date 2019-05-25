function titleCase(str) {
    let result = str.toLowerCase().split(' ').map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    })
    return result.join(' ');
}

titleCase();