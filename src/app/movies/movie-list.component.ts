import { Component, OnInit } from "@angular/core";
import { Movie } from './movie';
import { MovieService } from '../service/movie.service';

@Component({
    selector:"movies",
    templateUrl:"./movie-list.component.html",
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{
 pageTitle: string = "Movies";
 showImage: boolean = false;
 _listFilter: string;
 movies: Movie[];

get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string) {
    this._listFilter = value;
    // detta är en ifsats från javascript, antingen eller. listFilter är metoden ifall den är satt eller inte
    this.filteredMovies=this.listFilter ? this.performFilter(this.listFilter) : this.movies;
}
filteredMovies: Movie[];


// värden som är satta innan oninit


 constructor(private movieService: MovieService) {
 }

 // säger att du skriver in Kill Bill då blir filterBy = kill bill(lowercase) sen går du igenom alla Movie i movieslistan och retunerar alla som inte är -1
 performFilter(filterBy:string): Movie[]{
     filterBy = filterBy.toLocaleLowerCase();
     return this.movies.filter((mov: Movie) =>
     mov.movieName.toLocaleLowerCase().indexOf(filterBy) !== -1);
     
 }  

toggleImage(): void{
    this.showImage =!this.showImage
}
ngOnInit(): void{
    this.movieService.getAllMovies().subscribe(data =>{
        this.movies = data;
        console.log(data);
        this.filteredMovies = this.movies;
    })
 
 
}

}