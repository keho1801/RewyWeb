import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    getMovies(): Movie[] {
        return[
            {
                "movieId": 2,
                "movieName": "Kill Bill",
                "description": "about killing Bill"
            },
            {
               "movieId": 3,
               "movieName": "Toy Story!",
               "description": "Toys that are alive!"
           },
           {
               "movieId": 4,
               "movieName": "Joker",
               "description": "a boring comedian"
           }
        ];
    }
}