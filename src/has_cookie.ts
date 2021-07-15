export function has_cookie(key:string):boolean {
	if (!key) return false
	const encoded_key = encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&')
	const regex = new RegExp(`(?:^|;\\s*)${encoded_key}\\s*\\=`)
	return regex.test(document.cookie)
}
