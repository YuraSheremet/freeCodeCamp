function FindTheLongestWordInAString(str) {
    let words = str.split(' ');
    let result = 0;

    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > result) {
            result = words[i].length;
        }
    }
    return result;
}

FindTheLongestWordInAString();