import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ModalComponent } from '../modal/modal.component';

@Injectable()
export class DialogService {
  message = '';
  isShown = false;
  buttonOutput: boolean;

  toggleModalSubject: Subject<boolean> = new Subject<boolean>();
  dialogChangeSubject: Subject<string> = new Subject<string>();
  buttonSubject: Subject<boolean> = new Subject<boolean>();

  buttonOutputSubscription: any;

  show() {
    this.toggleModalSubject.next(!this.isShown);
  }

  setMessage(modalText: string) {
    this.dialogChangeSubject.next(this.message = modalText);
  }

  setButtonOutput(value: boolean) {
    this.buttonSubject.next(this.buttonOutput = value);
  }

  confirm(message?: string) {
    this.show();
    this.setMessage(message || 'Are you sure you want to leave this page?');
    // return this.buttonSubject.asObservable();
  }

}
