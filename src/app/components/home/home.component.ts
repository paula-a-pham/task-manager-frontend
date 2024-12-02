import { Component } from '@angular/core';
import { IBoard } from '../../models/iboard';

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
          title: 'Task 1',
          description: 'Description of Task 1 in To Do',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'To Do',
          priority: 1,
          tags: ['feature', 'urgent'],
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description of Task 2 in To Do',
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
          title: 'Task 1',
          description: 'Description of Task 1 in In Progress',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'In Progress',
          priority: 3,
          tags: ['enhancement', 'high priority'],
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description of Task 2 in In Progress',
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
          title: 'Task 1',
          description: 'Description of Task 1 in Completed',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'Completed',
          priority: 1,
          tags: ['urgent'],
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description of Task 2 in Completed',
          createdOn: new Date(),
          lastUpdate: new Date(),
          boardName: 'Completed',
          priority: 3,
          tags: ['feature', 'bug'],
        },
      ],
    },
  ];
}
