import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
//import 'rxjs/add/operator/map';
import { tokenNotExpired }  from 'angular2-jwt/angular2-jwt';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  recom:any;

  constructor(private http:Http) { }

  deleteRecom(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('http://localhost:3000/recoms/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  getAllRecoms() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/recoms/dis1')
        .pipe(map(res => res.json()))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registerRecom(recom){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/recoms/add',recom,{headers: headers})
    .pipe(map(res => res.json()));
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      .pipe(map(res => res.json()));
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile()
  {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
