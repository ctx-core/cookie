export declare function set_cookie(key: string, value: string, opts?: set_cookie_opts_type): boolean;
export declare type set_cookie_opts_type = {
    expires?: number | string | Date;
    path?: string;
    domain?: string;
    schedule?: string;
};
