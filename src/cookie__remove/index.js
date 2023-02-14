import { cookie__is_present_ } from '../cookie__is_present_/index.js'
export function cookie__remove(key, params = {}) {
	if (!cookie__is_present_(key)) {
		return false
	}
	const encoded_key = encodeURIComponent(key)
	const { domain, path } = params
	const cookie_domain = domain ? `; domain=${domain}` : ''
	const cookie_path = path ? `; path=${path}` : '.js'
	document.cookie = `${encoded_key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${cookie_domain}${cookie_path}`
	return true
}
export {
	cookie__remove as remove_cookie,
}
