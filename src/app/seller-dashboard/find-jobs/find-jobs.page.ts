import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base-page/base-page';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.page.html',
  styleUrls: ['./find-jobs.page.scss'],
})
export class FindJobsPage extends BasePage {

  jobs: any;

  constructor(injector: Injector) {
    super(injector)
    this.getJobData()
  }

  async getJobData(){
    let obj ={
      search: '',
      offset: 0,
      limit: 10
    }

    let res = await this.network.getJobList()
    console.log(res);

    this.jobs = res.data;

  }

  bidNow(id:number){

  }
}
