import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ticketOrder = async (req: Request, res: Response) => {
  try {
    const result = await prisma.orderTicket.createMany({ data: req.body });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const ticketsOrder = (app: express.Application) => {
  app.post("/ticket/order", ticketOrder);
};

export default ticketsOrder;
