//#region Imports

//#region Modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#endregion

//#region Components

import { WizzComponent } from './wizz.component';

//#endregion

//#endregion

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [WizzComponent],
  exports: [WizzComponent],
})
export class WizzModule {}

