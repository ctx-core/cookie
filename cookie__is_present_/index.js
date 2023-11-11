/**
 * @param {string}key
 * @returns {boolean}
 */
export function cookie__is_present_(key) {
	if (!key) return false
	const encoded_key = encodeURIComponent(key).replace(
    /[\-\.\+\*]/g, '\\$&')
	const regex = new RegExp(`(?:^|;\\s*)${encoded_key}\\s*\\=`)
	return regex.test(document.cookie)
}
export {
	cookie__is_present_ as has_cookie,
}
