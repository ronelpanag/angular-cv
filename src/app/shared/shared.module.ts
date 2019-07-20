import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileViewerComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ProfileViewerComponent, CommonModule, RouterModule]
})
export class SharedModule { }
