import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dialogService: DialogService) {

  }

  openModal() {
    console.log('button called');
    this.dialogService.confirm('hue hue hue');
  }

}


