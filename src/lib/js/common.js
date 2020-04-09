export function isInValidValue(text) {
    if (text != undefined && text != null && text != '') {
        return false;
    } else {
        return true;
    }
};

export function isEmail(email) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(email);
}
