import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

export class TaskInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public tasks: TaskInterface[] = [];
  public taskName: string = '';

  constructor(
    private modalController: ModalController
  ) { }

  insertTask(name: string) {
    const id = String(new Date().getTime());

    this.tasks.push({ name, id });

    this.taskName = '';
  }

  deleteTask(id: string) {
    const newTasksArray: TaskInterface[] = this.tasks.filter((el: TaskInterface) => el.id != id);

    this.tasks = newTasksArray;
  }

  async openEditTask(task: TaskInterface) {
    const modal = await this.modalController.create({
      component: EditModalComponent,
      cssClass: 'edit-task-modal',
      componentProps: {
        task
      }
    });

    await modal.present();
  }

}
