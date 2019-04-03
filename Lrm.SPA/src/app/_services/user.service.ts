import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {GLOBAL} from '../../environments/global';
import { Identity } from '../_models/Identity';
import {  JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class UserService {
    jwtHelper = new JwtHelperService();
    private identitySubject: BehaviorSubject<Identity>;
    public identity: Observable<Identity>;
    public url: string;
    public token: any;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    constructor(private http: HttpClient) {
        this.url = GLOBAL.url;
        this.identitySubject = new BehaviorSubject<Identity>(JSON.parse(localStorage.getItem('identity')));
        this.identity = this.identitySubject.asObservable();
    }

    isAuth() {
     this.token = JSON.parse(localStorage.getItem('token'));
        return !this.jwtHelper.isTokenExpired(this.token);
    }
    public getIdentity(): Identity {
        return this.identitySubject.value;
    }

    getToken() {
        this.token = JSON.parse(localStorage.getItem('token'));
        return this.token;
    }

    login(user_to_login: any) {

        const json = JSON.stringify(user_to_login);
        const params = `json=${json}`;

        return this.http.post<any>(`${this.url}/login`, params , { headers: this.headers})
        .pipe(map(user => {
            if (user) {
                const decodedToken = this.jwtHelper.decodeToken(user);
                localStorage.setItem('token', JSON.stringify(user));
                localStorage.setItem('identity', JSON.stringify(decodedToken));
                this.identitySubject.next(decodedToken);
            }
            return this.jwtHelper.decodeToken(user);
        }));

    }
    logout() {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identitySubject.next(null);
    }
}
