import { Router } from "express";
import todo_functions from "./todo_functions.js";


const todoRouter = Router();

todoRouter.post("/", async (req, res) => {
    const result = await todo_functions.create(req.body);

    res.status(201).json({ result });
});

todoRouter.get("/:id", async (req, res) => {
    const result = await todo_functions.readOne(+req.params.id);

    res.status(201).json({ result });
});

todoRouter.get("/", async (req, res) => {
    const result = await todo_functions.readAll();

    res.status(201).json({ result });
});

todoRouter.put("/:id", async (req, res) => {
    const result = await todo_functions.updateOne(+req.params.id, req.body);

    res.status(201).json({ result });
});

todoRouter.delete("/:id", async (req, res) => {
    const result = await todo_functions.deleteOne(+req.params.id);

    res.status(201).json({ result });
});


export default todoRouter;