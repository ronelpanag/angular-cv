import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { OtherActivitiesComponent } from './other-activities/other-activities.component';


@NgModule({
  declarations: [ProfileOverviewComponent, GeneralInfoComponent, ExperienceComponent, QualitiesComponent, OtherActivitiesComponent],
  imports: [
    CommonModule,
    SharedModule
    ],
  exports: [ProfileOverviewComponent, GeneralInfoComponent]
})
export class ProfilesModule { }
