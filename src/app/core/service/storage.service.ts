import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setToken(token: string, refreshToken: string): void{
    this.deleteToken();
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getToken(): string{
    return localStorage.getItem('token');
  }
  getRefreshToken(): string{
    return localStorage.getItem('refreshToken');
  }
  deleteToken(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
