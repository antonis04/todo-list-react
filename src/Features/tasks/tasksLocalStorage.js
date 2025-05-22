const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

export const getTasksFromLocalStorage = () => {
  try {
    const tasksJSON = localStorage.getItem("tasks");
    const parsedTasks = tasksJSON ? JSON.parse(tasksJSON) : [];
    return Array.isArray(parsedTasks) ? parsedTasks : [];
  } catch (error) {
    return [];
  }
};
