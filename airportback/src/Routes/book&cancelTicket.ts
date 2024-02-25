import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ticketBook = async (req: Request, res: Response) => {
  try {
    const result = await prisma.booking.createMany({ data: req.body });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const ticketList = async (req: Request, res: Response) => {
  try {
    const result = await prisma.booking.findMany({
      where: {
        source: req.body.source,
        destination: req.body.destination,
        bookingDate: new Date(req.body.takeOffDate),
      },
    });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const ticketCancel = async (req: Request, res: Response) => {
  try {
    const result = await prisma.cancelling.create({
      data: {
        surcharge: 15,
        cancelDate: new Date(),
        ticketId: req.body.ticketId,
        userId: req.body.userId,
      },
    });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const ticketDelete = async (req: Request, res: Response) => {
  try {
    const result = await prisma.booking.deleteMany({
      where: {
        ticketId: req.body.ticketId,
        userId: req.body.userId,
      },
    });
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const flightBooking = (app: express.Application) => {
  app.post("/ticket/order", ticketBook);
  app.get("ticket/get", ticketList);
  app.get("ticket/cancel", ticketCancel);
  app.post("/ticket/delete", ticketDelete);
};

export default flightBooking;
