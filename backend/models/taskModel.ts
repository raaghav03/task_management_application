import { Schema, model, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description?: string;
  status: string;
  priority?: "Low" | "Medium" | "Urgent";
  deadline?: Date;
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, "A title is required"],
  },
  description: {
    type: String,
    required: [false],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "Urgent"],
    required: [false],
  },
  deadline: {
    type: Date,
    required: [false],
  },
});

const Task = model<ITask>("Task", taskSchema);

export default Task;
