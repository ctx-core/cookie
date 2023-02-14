export declare function cookie__remove(
  key:string, params?:remove_cookie_params_I
):boolean
export {
	cookie__remove as remove_cookie,
}
export type remove_cookie_params_I = {
	domain?:string;
	path?:string;
}
