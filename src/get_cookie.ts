export function get_cookie(key) {
	if (!key) return null
	const encoded_key = encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&')
	const regex =
		new RegExp(
			`(?:(?:^|.*;)\\s*${encoded_key}\\s*\\=\\s*([^;]*).*$)|^.*$`)
	return (
		decodeURIComponent(
			document.cookie.replace(regex, '$1'))
		|| null
	)
}