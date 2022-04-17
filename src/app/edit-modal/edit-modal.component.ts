import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskInterface } from '../home/home.page';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {

  @Input() task: TaskInterface;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.task)
  }

  confirmTask() {
    this.modalController.dismiss();
  }

}
