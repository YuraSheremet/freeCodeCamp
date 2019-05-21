function ConfirmTheEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

ConfirmTheEnding();