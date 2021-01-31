import { has_cookie } from './has_cookie'
export function remove_cookie(key, opts:remove_cookie_opts_type = {}) {
	if (!has_cookie(key)) { return false }
	const encoded_key = encodeURIComponent(key)
	const { domain, path } = opts
	const cookie_domain =
		domain
		? `; domain=${domain}`
		: ''
	const cookie_path =
		path
		? `; path=${path}`
		: ''
	document.cookie =
		`${encoded_key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${cookie_domain}${cookie_path}`
	return true
}
export type remove_cookie_opts_type = {
	domain?:string
	path?:string
}
