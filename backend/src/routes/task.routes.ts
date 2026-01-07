// src/routes/task.routes.ts
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
});

router.post("/", async (req, res) => {
    const task = await prisma.task.create({
        data: { title: req.body.title }
    });
    res.json(task);
});

export default router;
