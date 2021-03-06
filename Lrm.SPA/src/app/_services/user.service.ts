import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../../environments/global';
import { Identity } from '../_models/Identity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
    jwtHelper = new JwtHelperService();
    private identitySubject: BehaviorSubject<Identity>;
    public identity: Observable<Identity>;
    public url: string;
    public mock_url: string;
    public token: any;
    headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    constructor(private http: HttpClient) {
        this.url = GLOBAL.url;
        this.mock_url = GLOBAL.mock_url;
        this.identitySubject = new BehaviorSubject<Identity>(JSON.parse(localStorage.getItem('identity')));
        this.identity = this.identitySubject.asObservable();
    }

    isAuth() {
     this.token = JSON.parse(localStorage.getItem('token'));
        return !this.jwtHelper.isTokenExpired(this.token);
    }
    getIdentity(): Identity {
        return this.identitySubject.value;
    }

    getId(): number {
        return this.getIdentity().sub;
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

    getUser(id: any) {
        return this.http.get<User>(`${this.mock_url}/users/` + this.getId());
    }

    updateCurrentUser(user: any) {
       return this.http.patch<any>(`${this.mock_url}/users/` + this.getId(), user );
    }
}
