import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { FileListComponent } from './file-list/file-list.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [TaskListComponent, NotificationListComponent, FileListComponent, CommentsComponent],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
