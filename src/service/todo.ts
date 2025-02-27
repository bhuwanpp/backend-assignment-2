import { IALLTasks, ITask } from "../interfaces/todo";
import * as TaskModel from "../model/todo";

/**
 * Retrieves all tasks for a specific user.
 * @param {string} userId - The ID of the user whose tasks are to be retrieved.
 * @returns {IALLTasks[]} - An array containing all tasks for the specified user.
 */
export function getTasks(userId: string): IALLTasks[] {
  const data = TaskModel.getAllTasks(userId);
  return data;
}

/**
 * Retrieves a task by its ID for a specific user.
 * @param {string} id - The ID of the task to retrieve.
 * @param {string} userId - The ID of the user.
 * @returns {IALLTasks | { error: string }} - The task object if found, otherwise an error object.
 */
export function getTaskById(
  id: string,
  userId: string
): IALLTasks | { error: string } {
  const data = TaskModel.getTaskById(id, userId);
  if (!data) {
    return {
      error: `task with id:${id} not found`,
    };
  }
  return data;
}

/**
 * Creates a new task for a specific user.
 * @param {ITask} task - The task object to create.
 * @param {string} userId - The ID of the user for whom the task is created.
 */
export function createTask(task: ITask, userId: string) {
  TaskModel.createTask(task, userId);
}

/**
 * Updates an existing task for a specific user.
 * @param {string} id - The ID of the task to update.
 * @param {ITask} task - The updated task object.
 * @param {string} userId - The ID of the user.
 * @returns {void | { error: string }} - Returns nothing if successful, otherwise an error object.
 */
export function updateTask(
  id: string,
  task: ITask,
  userId: string
): void | { error: string } {
  const data = TaskModel.updateTask(id, task, userId);
  if (data === -1) {
    return {
      error: `task with id:${id} not found `,
    };
  }
}

/**
 * Deletes a task by its ID for a specific user.
 * @param {string} id - The ID of the task to delete.
 * @param {string} userId - The ID of the user.
 * @returns {void | { error: string }} - Returns nothing if successful, otherwise an error object.
 */
export function deleteTask(
  id: string,
  userId: string
): void | { error: string } {
  const data = TaskModel.deleteTask(id, userId);
  if (data === -1) {
    return {
      error: `task with id:${id} not found `,
    };
  }
}
