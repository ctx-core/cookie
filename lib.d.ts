/**
 * @module @ctx-core/cookies/lib
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework}
 */
export declare function get__cookie(key: any): string | null;
declare type Opts__set__cookie = {
    expires?: number | string | Date;
    path?: string;
    domain?: string;
    schedule?: string;
};
export declare function set__cookie(key: any, value: any, opts?: Opts__set__cookie): boolean;
declare type Opts__remove__cookie = {
    domain?: string;
    path?: string;
};
export declare function remove__cookie(key: any, opts?: Opts__remove__cookie): boolean;
export declare function has__cookie(key: any): boolean;
export declare function keys__cookie(): string[];
export {};
