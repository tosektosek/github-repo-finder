import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch, Repository } from '../model/repository.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  url = environment.githubUrl;
  constructor(private http: HttpClient) {}

  getAllReposForUser(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `${this.url}/users/${username}/repos`,
    );
  }

  getRepoDetails(name): Observable<Branch[]> {
    return this.http.get<Branch[]>(
      `${this.url}/repos/${name}/branches`,
    );
  }
}
