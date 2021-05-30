export function cookie_keys_() {
	const keys =
		document.cookie
			.replace(
				/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
				'')
			.split(
				/\s*(?:\=[^;]*)?;\s*/)
	for (let length = keys.length, i = 0; i < length; i++) {
		keys[i] = decodeURIComponent(keys[i])
	}
	return keys
}
export {
	cookie_keys_ as _cookie_keys,
}
