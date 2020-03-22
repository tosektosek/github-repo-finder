import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch, Repository } from '../model/repository.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getAllReposForUser(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${username}/repos`,
    );
  }

  getRepoDetails(name): Observable<Branch[]> {
    return this.http.get<Branch[]>(
      `https://api.github.com/repos/${name}/branches`,
    );
  }
}
