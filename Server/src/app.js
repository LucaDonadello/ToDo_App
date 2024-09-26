import express from 'express';
import todoRouter from '../ToDo/todo_router.js';

const app = express();
app.use(express.json());
app.use('/todos', todoRouter)

export default app;