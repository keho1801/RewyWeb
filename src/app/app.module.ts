import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { SharedComponent } from './shared/shared.component';
import { UserListComponent } from './user/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { RouterModule } from '@angular/router';
import { MovieService } from './service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SharedComponent,
    UserListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'user', component: UserListComponent},
      {path:'welcome', component: MovieListComponent},
      {path:'', redirectTo:'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [UserService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
