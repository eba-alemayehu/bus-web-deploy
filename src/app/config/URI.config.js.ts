import {isDevMode} from '@angular/core';

let _SERVER_URI = 'http://api.gozo.com/';

if (isDevMode()){
    _SERVER_URI   = 'https://localhost:8000/';
}

export const SERVER_URI   = _SERVER_URI;
export const GRAPHQL_URL  = _SERVER_URI + 'graphql';
