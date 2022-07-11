import React from "react";
import Task from "./Task";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Take a test",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          // return <li key={task.id}>{task.text}</li>;
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
