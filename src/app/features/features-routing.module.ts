import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileOverviewComponent } from './profiles/profile-overview/profile-overview.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GeneralInfoComponent } from './profiles/general-info/general-info.component';
import { ExperienceComponent } from './profiles/experience/experience.component';
import { QualitiesComponent } from './profiles/qualities/qualities.component';
import { OtherActivitiesComponent } from './profiles/other-activities/other-activities.component';

const routes: Routes = [
  {
    path:'', component: WelcomeComponent
  },
  {
    path: 'profile', 
    loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule),
    component: ProfileOverviewComponent
  },
  {
    path: 'profile/ronelpanag/general-info',
    loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule),
    component: GeneralInfoComponent    
  },
  {
    path:'profile/ronelpanag/experience',
    loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule),
    component: ExperienceComponent
  },
  {
    path:'profile/ronelpanag/qualities',
    loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule),
    component: QualitiesComponent
  },
  {
    path:'profile/ronelpanag/other-activities',
    loadChildren: () => import('./profiles/profiles.module').then(m => m.ProfilesModule),
    component: OtherActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
