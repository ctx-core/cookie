export declare function cookie__set(
	key:string,
	value:string,
	opts?:set_cookie__params_T
):boolean
export {
	cookie__set as set_cookie,
}
export interface set_cookie__params_T {
	expires?:number|string|Date
	path?:string
	domain?:string
	schedule?:string
}
export type set_cookie_opts_type = set_cookie__params_T
