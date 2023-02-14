/**
 * @returns {string[]}
 */
export function cookie_key_a_() {
	const key_a = document.cookie.replace(
		/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
		''
	).split(/\s*(?:\=[^;]*)?;\s*/)
	for (let length = key_a.length, i = 0; i < length; i++) {
		key_a[i] = decodeURIComponent(key_a[i])
	}
	return key_a
}
export {
	cookie_key_a_ as cookie_keys_,
	cookie_key_a_ as _cookie_keys, 
}
