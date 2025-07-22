import type React from "react";
import TaskManager from "../components/TaskManager";

// Tasks component to render the task management page
const Tasks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Task Management</h1>
          <p className="text-lg text-muted-foreground">
            Organize your tasks efficiently with our intuitive task manager.
          </p>
        </div>

        <TaskManager />
      </div>
    </div>
  );
};

// Export the Tasks component for use in the application
export default Tasks;
