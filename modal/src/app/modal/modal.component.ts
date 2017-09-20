import { Component } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalMessage: string;
  isShown: boolean;
  buttonOutput: boolean;

  visibilitySubscription: any;
  messageSubscription: any;

  constructor(private dialogService: DialogService) {
    this.visibilitySubscription = dialogService.toggleModalSubject.subscribe((value) => {
      this.isShown = value;
      console.log(this.isShown);
    });
    this.messageSubscription = dialogService.dialogChangeSubject.subscribe((value) => {
      this.modalMessage = value;
      console.log(this.modalMessage);
    });
  }

  confirm() {
    this.isShown = false;
    this.dialogService.setButtonOutput(true);
  }

  cancel() {
    this.isShown = false;
    this.dialogService.setButtonOutput(false);
  }
}
