export declare function set_cookie(key: any, value: any, opts?: set_cookie_opts_type): boolean;
export declare type set_cookie_opts_type = {
    expires?: number | string | Date;
    path?: string;
    domain?: string;
    schedule?: string;
};
