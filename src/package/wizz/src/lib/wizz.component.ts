/**
 * WIZZ v2
 */

//#region Imports

import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { iOSService } from './service/ios.service';

//#endregion

/**
 * An input component respecting the SNA design.
 */
@Component({
  selector: 'wizz',
  template: '',
  styleUrls: ['./wizz.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WizzComponent {
  //#region Attributes

  private _shift: boolean = false;
  private _dictionary: string = '';

  @HostListener('document:input', ['$event'])
  handleChangeEvent(event: InputEvent) {
    if (this._iOSService.isiOS) {
      if (event.data) {
        if (event.data == event.data.toUpperCase()) {
          this._dictionary += event.data;
          if (this._dictionary.endsWith('WIZZ')) {
            this._wizz();
          }
        }
      }
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this._iOSService.isiOS) {
      if (this._shift) {
        this._dictionary += event.key;
        if (this._dictionary.endsWith('WIZZ')) {
          this._wizz();
        }
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    if (!this._iOSService.isiOS) {
      if ($event.key === 'Shift') {
        if (!this._shift) {
          this._shift = true;
          this._dictionary = '';
        }
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp($event: KeyboardEvent) {
    if (!this._iOSService.isiOS) {
      if ($event.key === 'Shift') {
        if (this._shift) {
          this._shift = false;
          this._dictionary = '';
        }
      }
    }
  }

  //#endregion

  constructor(private _iOSService: iOSService) {}

  //#region Functions

  private _wizz(): void {
    this._dictionary = '';
    const CLASS: string = 'wizz';
    document.body.classList.add(CLASS);
    setTimeout(() => {
      document.body.classList.remove(CLASS);
    }, 750);
  }

  //#endregion
}
