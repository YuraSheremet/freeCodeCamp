function pairElement(str) {
    let group = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }

    return str.split('').map(function(elem) {
        return [elem, group[elem]];
    });
}
  
pairElement("GCG");