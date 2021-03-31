import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Tuto Link : https://netbasal.com/angular-2-persist-your-login-status-with-behaviorsubject-45da9ec43243
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any>
  {
    return this.http.post('http://localhost:3000/clients', userData);
  }

  login(loginData: any): Observable<any>
  {
    return this.http.get(`http://localhost:3000/clients?email=${loginData.email}&password=${loginData.password}`);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }

  /**
  *  Login the user then tell all the subscribers about the new status
  */
  loginSaveState() : void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
  }
  
  /**
  * Log out the user then tell all the subscribers about the new status
  */
  logoutSaveState() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  /**
  *
  * @returns {Observable<T>}
  */
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

}
