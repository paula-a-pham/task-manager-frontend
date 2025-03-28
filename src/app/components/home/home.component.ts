import { Component, TemplateRef } from '@angular/core';
import { IBoard } from '../../models/iboard';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../../models/itask';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  boards: IBoard[] = [
    {
      id: 1,
      name: 'To Do',
      tasks: [
        {
          id: 1,
          title: 'Plan Project Milestones',
          description: 'Create a timeline for key project milestones.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'To Do',
          priority: 1,
          tags: ['feature', 'urgent'],
        },
        {
          id: 2,
          title: 'Research Competitor Features',
          description: 'Analyze competitor products for inspiration.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'To Do',
          priority: 2,
          tags: ['bug'],
        },
      ],
    },
    {
      id: 2,
      name: 'In Progress',
      tasks: [
        {
          id: 1,
          title: 'Develop Authentication System',
          description: 'Implement user login and registration functionalities.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'In Progress',
          priority: 3,
          tags: ['enhancement', 'high priority'],
        },
        {
          id: 2,
          title: 'UI Design for Dashboard',
          description: 'Design an intuitive dashboard layout for users.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'In Progress',
          priority: 2,
          tags: ['feature'],
        },
      ],
    },
    {
      id: 3,
      name: 'Completed',
      tasks: [
        {
          id: 1,
          title: 'Finalize Logo Design',
          description: 'Complete and approve the final logo for the project.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'Completed',
          priority: 1,
          tags: ['urgent'],
        },
        {
          id: 2,
          title: 'Fix Security Vulnerabilities',
          description: 'Resolve identified security flaws in the application.',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'Completed',
          priority: 3,
          tags: ['feature', 'bug'],
        },
      ],
    },
  ];

  task!: ITask;
  // addOnBlur = true;
  tags!: string[];

  newTaskFlag!: boolean;
  boardId!: number;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) {
    this.tags = [];
    this.newTaskFlag = false;
    this.boardId = 0;
  }

  dropTask(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  trackByBoard(index: number, board: IBoard): number {
    return board.id;
  }

  trackByTask(index: number, task: ITask): number {
    return task.id;
  }

  openTaskInformationPanel(content: TemplateRef<any>, task: ITask) {
    this.task = task;
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'x-panel',
    });
  }

  openDialog(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

  displayNewTaskCard(id: number): void {
    this.newTaskFlag = true;
    this.boardId = id;
  }

  hideNewTaskCard(): void {
    this.newTaskFlag = false;
    this.boardId = 0;
    this.tags = [];
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }
}
