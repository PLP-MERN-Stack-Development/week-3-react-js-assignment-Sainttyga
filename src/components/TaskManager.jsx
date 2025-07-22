import type React from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

// Task interface to define the structure of a task object
interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Filter type to define the possible task filters
type FilterType = "all" | "active" | "completed";

// TaskManager component to manage tasks
const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage < Task[] > ("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState < FilterType > ("all");

  // Effect to load tasks from local storage on component mount
  const addTask = () => {
    if (newTask.trim() !== "") {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  // Function to toggle task completion status
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Function to delete a task by its ID
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to clear completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Filter tasks based on the selected filter type
  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed;
      case "completed":
        return task.completed;
      default:
        return true;
    }
  });

  // Calculate active and completed tasks for statistics
  const activeTasks = tasks.filter((task) => !task.completed).length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  // Handle Enter key press to add a new task
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Render the TaskManager component with the task list and controls
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Task Manager</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add Task Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button onClick={addTask} disabled={!newTask.trim()}>
              Add Task
            </Button>
          </div>

          {/* Task Statistics */}
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{activeTasks} active</span>
            <span>{completedTasks} completed</span>
            <span>{tasks.length} total</span>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 justify-center">
            {(["all", "active", "completed"] as FilterType[]).map(
              (filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setFilter(filterType)}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </Button>
              ),
            )}
          </div>

          {/* Clear Completed Button */}
          {completedTasks > 0 && (
            <div className="flex justify-center">
              <Button variant="danger" size="sm" onClick={clearCompleted}>
                Clear Completed ({completedTasks})
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              {filter === "all"
                ? "No tasks yet. Add one above!"
                : `No ${filter} tasks.`}
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} className="transition-all hover:shadow-md">
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <span
                      className={`flex-1 ${task.completed
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                        }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

// Export the TaskManager component for use in other parts of the application
export default TaskManager;
