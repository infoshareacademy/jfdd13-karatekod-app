export function hasOnlySpecialCharater(val) {
    var pattern = /^[^a-zA-Z0-9]+$/;
    return (pattern.test(val));
}

