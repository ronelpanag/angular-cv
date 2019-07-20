import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfilesModule } from './profiles/profiles.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    ProfilesModule
  ],
  exports: []
})
export class FeaturesModule { }
