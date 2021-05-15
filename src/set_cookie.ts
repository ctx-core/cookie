export function set_cookie(key:string, value:string, opts:set_cookie_opts_type = {}) {
	const {
		expires,
		path,
		domain,
		schedule
	} = opts
	if (
		!key
		|| (
			/^(?:expires|max\-age|path|domain|secure)$/i
				.test(key)
		)
	)
		return false
	let cookie_expires = ''
	if (expires) {
		switch (expires.constructor) {
			case Number:
				cookie_expires =
					expires === Infinity
					? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
					: `; max-age=${expires}`
				break
			case String:
				cookie_expires = `; expires=${expires}`
				break
			case Date:
				cookie_expires = `; expires=${(expires as Date).toUTCString()}`
				break
		}
	}
	const encoded_key = encodeURIComponent(key)
	const encoded_value = encodeURIComponent(value)
	const cookie_domain =
		domain
		? `; domain=${domain}`
		: ''
	const cookie_path =
		path
		? `; path=${path}`
		: ''
	const cookie_schedule =
		schedule
		? '; secure'
		: ''
	document.cookie =
		`${encoded_key}=${encoded_value}${cookie_expires}${cookie_domain}${cookie_path}${cookie_schedule}`
	return true
}
export type set_cookie_opts_type = {
	expires?:number|string|Date
	path?:string
	domain?:string
	schedule?:string
}
