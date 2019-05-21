function repeatAString(str, num) {
    let result = '';

    for (let i = num; i > 0; i -= 1) {
        result += str;
    }
    return result;
}

repeatAString();

//return (num > 0)? str.repeat(num) : '';