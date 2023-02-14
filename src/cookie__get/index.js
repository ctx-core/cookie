/**
 * @param key{string}
 * @returns {string|undefined}
 */
export function cookie__get(key) {
	if (!key) return
	const encoded_key = encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&')
	const regex = new RegExp(`(?:(?:^|.*;)\\s*${encoded_key}\\s*\\=\\s*([^;]*).*$)|^.*$`)
	return decodeURIComponent(document.cookie.replace(regex, '$1')) || undefined
}
export {
	cookie__get as get_cookie,
}
