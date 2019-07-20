import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { MenuComponent } from './components/shell/menu/menu.component';
import { MainComponent } from './components/shell/main/main.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { MyMaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [ShellComponent, MenuComponent, MainComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, 
    MyMaterialModule, 
    SharedModule, 
    LayoutModule, 
    PagesModule
  ],
  exports:[ShellComponent, NotFoundComponent]
})
export class CoreModule { }
