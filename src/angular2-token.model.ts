import {
    RequestMethod,
    RequestOptions
} from '@angular/http';

export interface UserType {
    name: string;
    path: string;
}

export interface AuthData {
    accessToken:    string;
    client:         string;
    expiry:         string;
    tokenType:      string;
    uid:            string;
}

export interface OAuthPaths {
    github?:    string;
}

export interface Angular2TokenOptions {
    apiPath?:                   string;
    signInPath?:                string;
    signOutPath?:               string;
    validateTokenPath?:         string;

    deleteAccountPath?:         string;
    registerAccountPath?:       string;
    registerAccountCallback?:   string;

    updatePasswordPath?:        string;

    resetPasswordPath?:         string;
    resetPasswordCallback?:     string;

    userTypes?:                 UserType[];

    oAuthPaths?:                OAuthPaths;
}

export interface HttpRequestOptions {
    requestMethod: RequestMethod,
    path: string,
    body?: any,
    requestOptions?: RequestOptions
}