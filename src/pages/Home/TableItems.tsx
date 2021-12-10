import React from "react";
import { db } from "../../db/db";
import { Task } from "../../models/Task";
import { dateFormatted } from "../../shared/DateUtils";
import "./TableItems.css";

export interface TableItemsProps {
  tasks: Task[];
}

const TableItems = (props: TableItemsProps) => {
  const toggleCompleted = async (task: Task) => {
    await db.tasks.update(task.id || 0, {
      completed: !task.completed,
      completedDate: !task.completed ? new Date() : undefined,
    });
  };

  return (
    <div className="content-table">
      <div className="content-table-items">
        <table>
          <thead>
            <tr className="table-headers">
              <th className="checkbox"></th>
              <th className="description">Descrição</th>
              <th>Criado</th>
              <th>Finalizado</th>
            </tr>
          </thead>
          <tbody>
            {props.tasks.map((task, index) => (
              <tr
                key={index}
                className={task.completed ? "task-completed" : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    onChange={() => toggleCompleted(task)}
                    checked={task.completed}
                  />
                </td>
                <td>{task.description}</td>
                <td>{dateFormatted(task.createdDate)}</td>
                <td>{dateFormatted(task.completedDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableItems;
