import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movies/movie';

@Injectable()
export class MovieService {
    private url: string;

    movies: Movie[];

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8080/welcome'
    }
    public getAllMovies(): Observable<Movie[]>{
        return this.http.get<Movie[]>(this.url);
    }

}