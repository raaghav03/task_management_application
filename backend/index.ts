import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Task from "./models/taskModel";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());
const port = 5001;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5001, () => {
      console.log(`Server is running on port ${process.env.PORT || 5001}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error in GET route:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
});
app.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    console.error("Error in GET route:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
});

app.post("/tasks", async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    console.error("Error in GET route:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
});

//update a product
app.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res.status(404).json({ message: "product not found" });
    }
    const updatesTask = await Task.findById(id);
    res.status(200).json(updatesTask);
  } catch (error) {
    console.error("Error in GET route:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
});
app.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    console.log("error in delete route -> ", error);
    res.status(500).json({
      message: "an error in the delete route while processsing your error",
    });
  }
});
