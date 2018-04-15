import * as api from './api';

// These wrappers are needed until we update the swagger->TypeScript generator

// Add the ability to extend auth.
export class Core_v1Api extends api.CoreV1Api {
    constructor(baseUri: string) {
        super(baseUri);
    }
    public setDefaultAuthentication(auth: api.Authentication) {
        this.authentications.default = auth;
    }
}

export class Extensions_v1beta1Api extends api.ExtensionsV1beta1Api {
    constructor(baseUri: string) {
        super(baseUri);
    }
    public setDefaultAuthentication(auth: api.Authentication) {
        this.authentications.default = auth;
    }
}

// TODO: Add other API objects here

