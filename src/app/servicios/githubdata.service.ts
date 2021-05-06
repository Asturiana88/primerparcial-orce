import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubdataService {

  githubDataURl:string = 'https://api.github.com/users/Asturiana88'

  constructor(private http: HttpClient, ){}

  getGithubData = () => { return this.http.get(this.githubDataURl) }

}
