export declare function cookie__remove(
  key:string, 
	params?:remove_cookie_params_T
):boolean
export {
	cookie__remove as remove_cookie,
}
export interface remove_cookie_params_T {
	domain?:string
	path?:string
}
export type remove_cookie_params_I = remove_cookie_params_T
