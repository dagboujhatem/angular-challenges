import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(userData: any): Observable<any>
  {
    return this.http.post('http://localhost:3000/users', userData);
  }

  getAllUsers(): Observable<any>
  {
    return this.http.get('http://localhost:3000/users');
  }

  getOneUserById(id: any): Observable<any>
  {
    return this.http.get('http://localhost:3000/users/'+ id);
  }

  updateUserById(id: any, updatedUserData: any): Observable<any>
  {
    return this.http.put('http://localhost:3000/users/'+ id, updatedUserData);
  }

  deleteUserById(id: any): Observable<any>
  {
    return this.http.delete('http://localhost:3000/users/'+ id);
  }
}
