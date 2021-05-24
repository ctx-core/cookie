export function _cookie_keys() {
    const keys = document.cookie
        .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
        .split(/\s*(?:\=[^;]*)?;\s*/);
    for (let length = keys.length, i = 0; i < length; i++) {
        keys[i] = decodeURIComponent(keys[i]);
    }
    return keys;
}
