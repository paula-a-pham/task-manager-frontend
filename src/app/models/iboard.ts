import { ITask } from './itask';

export interface IBoard {
  id: number;
  name: string;
  tasks: ITask[];
}
