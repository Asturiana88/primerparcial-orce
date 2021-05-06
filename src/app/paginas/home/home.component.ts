import { Component, OnInit } from '@angular/core';
import { GithubdataService } from 'src/app/servicios/githubdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = null
  constructor(private githubClient : GithubdataService) {
    githubClient.getGithubData().subscribe(
      (results: any) => {
        this.data = results
      }
    )
   }

  ngOnInit(): void {
  }

}
