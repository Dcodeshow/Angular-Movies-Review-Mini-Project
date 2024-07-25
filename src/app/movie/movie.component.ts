import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  type: string = '';
  id: string = '';
  url: string = '';
  movie: any = {};

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) {
    this.id = this.activateRoute.snapshot.params['id'];
    this.type = this.activateRoute.snapshot.params['type'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    } else if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    } else if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((res: any): void => {
      this.movie = res;
      console.log(this.movie);
      let index = this.movie.findIndex((m: any) => m.id == this.id);
      if (index > -1) {
        this.movie = this.movie[index];
      }
      console.log(index);
    });
  }
}
