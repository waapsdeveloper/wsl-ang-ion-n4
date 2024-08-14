import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base-page/base-page';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.page.html',
  styleUrls: ['./my-jobs.page.scss'],
})
export class MyJobsPage extends BasePage implements OnInit {

  jobs: any;

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  async getJobData(){
    let obj ={
      search: '',
      offset: 0,
      limit: 10
    }

    let res = await this.network.getMyJobList()
    console.log(res);

    this.jobs = res.data;

  }



}
