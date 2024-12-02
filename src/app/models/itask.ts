export interface ITask {
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  lastUpdate: Date;
  boardName: string;
  priority: number;
  tags: string[];
}
