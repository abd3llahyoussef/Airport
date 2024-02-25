import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const flightSearch = async (req: Request, res: Response) => {
  try {
    const result = await prisma.airlineFlights.findMany({
      where: {
        cityFrom: req.body.cityFrom,
        cityTo: req.body.cityTo,
        takeOffDate: new Date(req.body.takeOffDate),
        arrivelDate: new Date(req.body.arrivalDate),
      },
      include: {
        airline: true,
      },
    });
    console.log("result :", result);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
};

const Flights = (app: express.Application) => {
  app.post("/flights", flightSearch);
};

export default Flights;
