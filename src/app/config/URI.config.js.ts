import {isDevMode} from '@angular/core';

let _SERVER_URI = 'http://api.gozo.com/';

if (isDevMode()){
    // _SERVER_URI   = 'https://hrkylbniai.execute-api.us-west-2.amazonaws.com/dev/';
    _SERVER_URI   = 'http://localhost:8000/';
}

export const SERVER_URI   = _SERVER_URI;
export const GRAPHQL_URL: string  = _SERVER_URI + 'graphql/';
