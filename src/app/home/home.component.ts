import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  trendingMovies: any = '';
  popularMovies: any = '';
  theatreMoviies: any = '';
  constructor(private http: HttpClient, private Router: Router) {}

  trendingUrl = 'http://localhost:4200/assets/data/trending-movies.json';
  popularUrl = 'http://localhost:4200/assets/data/theatre-movies.json';
  theatreUrl = 'http://localhost:4200/assets/data/popular-movies.json';

  ngOnInit(): void {
    this.trendingMovie();
    this.popularMovie();
    this.theatreMovie();
  }

  trendingMovie() {
    this.http.get(this.trendingUrl).subscribe((response) => {
      this.trendingMovies = response;
    });
  }

  popularMovie() {
    this.http.get(this.popularUrl).subscribe((response) => {
      this.popularMovies = response;
    });
  }

  theatreMovie() {
    this.http.get(this.theatreUrl).subscribe((response) => {
      this.theatreMoviies = response;
    });
  }

  goToMovie(type: string, id: number): void {
    this.Router.navigate(['/movie', type, id]);
  }
}
