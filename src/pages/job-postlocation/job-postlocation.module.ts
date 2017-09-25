import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobPostlocation } from './job-postlocation';

@NgModule({
  declarations: [
    JobPostlocation,
  ],
  imports: [
    IonicPageModule.forChild(JobPostlocation),
  ],
  exports: [
    JobPostlocation
  ]
})
export class JobPostlocationModule {}
