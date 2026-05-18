import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const api = require("./routes/ai");
const app:Application  = express();
const port:number = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World! AI Content Creator Backend is running.");
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});