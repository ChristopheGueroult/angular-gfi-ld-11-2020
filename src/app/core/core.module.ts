import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiModule } from '../ui/ui.module';
import { LoginModule } from '../login/login.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    UiModule,
    LoginModule,
    IconsModule
  ]
})
export class CoreModule { }
