import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any>
  {
    return this.http.post('http://localhost:3000/clients', userData);
  }

  login(loginData: any): Observable<any>
  {
    return this.http.get(`http://localhost:3000/clients?email=${loginData.email}&password=${loginData.password}`);
  }

}
