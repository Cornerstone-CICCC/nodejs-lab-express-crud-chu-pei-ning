import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import employeeRouter from './routes/employee.routes'
import cors from "cors"
dotenv.config()

// Create server
const app = express()

app.use(express.json()) // Allow JSON
app.use(cors()) // Allow frontend to send requests

// Routes
app.use("/employees", employeeRouter)

// Fallback
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Page not found!");
});

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})