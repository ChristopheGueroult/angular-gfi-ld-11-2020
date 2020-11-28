import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TestDirective } from './directives/test.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextsModule } from '../texts/texts.module';


@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TotalPipe, StateDirective, TestDirective, TableauDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TextsModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    ReactiveFormsModule,
    TextsModule,
    TableauLightComponent,
    ButtonComponent,
    TotalPipe,
    StateDirective,
    TestDirective,
    TableauDarkComponent
  ]
})
export class SharedModule { }
