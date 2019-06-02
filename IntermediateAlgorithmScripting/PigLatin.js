function translatePigLatin(str) {
    let regex = /[aeuio]/ig;

    if (str[0].match(regex)) {
        return str + 'way';
    } else if (str.match(regex) === null) {
        return str + 'ay';
    } else {
        let Index = str.indexOf(str.match(regex)[0])
        return str.slice(Index) + str.slice(0, Index) + 'ay';
    }
}

translatePigLatin("consonant");