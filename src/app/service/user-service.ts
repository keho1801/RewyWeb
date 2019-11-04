import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8080/user'
    }
    public findAll(): Observable<User[]>{
        return this.http.get<User[]>(this.url);
    }
    public save(user: User){
        return this.http.post<User>(this.url, user);
    }
}