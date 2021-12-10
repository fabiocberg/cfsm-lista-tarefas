import Dexie, { Table } from "dexie";
import { Task } from "../models/Task";

export class MyDexie extends Dexie {
  tasks!: Table<Task>;

  constructor() {
    super("TasksDatabase");
    this.version(1).stores({
      tasks: "++id, completed, description, createdDate, completedDate",
    });
  }
}

export const db = new MyDexie();
