export declare function cookie__set(
	key:string, value:string, opts?:set_cookie_opts_type
):boolean
export {
	cookie__set as set_cookie,
}
export type set_cookie_opts_type = {
	expires?:number|string|Date;
	path?:string;
	domain?:string;
	schedule?:string;
};
