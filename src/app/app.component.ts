import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WizzModule } from '../package/wizz/src/lib/wizz.module';
import { WizzComponent } from '../package/wizz/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WizzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //#region Attributes

  @ViewChild('wizzComponent') wizzComponent?: WizzComponent;

  //#endregion

  //#region Function

  protected wizz(): void{
    this.wizzComponent?.wizz();
  }

  //#endregion
}
