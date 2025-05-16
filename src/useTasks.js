import { useState, useEffect } from "react";

const TASKS_LOCAL_STORAGE_KEY = "tasks";

function getInitialTasks() {
  const tasksFromStorage = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);
  if (tasksFromStorage) {
    try {
      return JSON.parse(tasksFromStorage);
    } catch {
      return [];
    }
  }
  return [];
}

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    if (content === "") {
      return;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
