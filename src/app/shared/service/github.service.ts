import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Repository } from '../model/repository.model';
const headers = new HttpHeaders({
  Authorization: 'Bearer 0331d4e460f395c8e57aeed98d5ab5323c82df85',
});
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getAllReposForUser(username: string) {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`,
      {
        headers,
      },
    );
  }

  getRepoDetails(name) {
    return this.http.get<any[]>(
      `https://api.github.com/repos/${name}/branches`,
      {
        headers,
      },
    );
  }
}
