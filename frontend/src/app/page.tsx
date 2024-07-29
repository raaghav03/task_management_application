"use client"
import { ReactNode, useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../lib/api';

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  deadline: ReactNode
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const fetchTasks = async () => {
    const data: Task[] = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async () => {
    const newTask = await createTask({ name: taskName });
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName('');
  };

  const handleUpdate = async (id: string) => {
    const updatedTask = await updateTask(id, { name: taskName });
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === id ? updatedTask : task))
    );
    setTaskName('');
    setSelectedTask(null);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1 className='underline'>Tasks</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={selectedTask ? () => handleUpdate(selectedTask) : handleCreate}>
        {selectedTask ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className='flex flex-col gap-4 border-[1px] border-gray-400 w-fit rounded-md p-4 text-gray-500'>
            <div className='underline'>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.status}</div>
            <div>{task.priority}</div>
            <div>{task.deadline}</div>

            <div className='flex gap-2'> {/* Optional: flex for buttons as well */}
              <button onClick={() => {
                setTaskName(task.title);
                setSelectedTask(task._id);
              }}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Tasks;
