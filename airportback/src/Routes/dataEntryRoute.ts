import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

interface userData {
  passport: string;
  password: string;
  email: string;
  birth?: string;
  Fname: string;
  Lname: string;
  country: string;
  state: string;
  street: string;
  sex: string;
}

dotenv.config();

const prisma = new PrismaClient();

const pepper = process.env.PEPPER!;
const salt = process.env.SALT_ROUNDS!;
const secret = process.env.TOKEN_SECRET!;

const getAllFlights = async (req: Request, res: Response) => {
  const allFlights = await prisma.airlineFlights.findMany();
  res.json(allFlights);
  return allFlights;
};

const createClients = async (req: Request, res: Response) => {
  const client: userData = req.body;
  const hashPassword: string = bcrypt.hashSync(
    client.password + pepper,
    parseInt(salt)
  );
  client.password = hashPassword;
  try {
    const newUser = await prisma.client.createMany({ data: client });
    console.log("Created!!!");
  } catch (err) {
    res.sendStatus(500);
    console.log(`there is an error${err}`);
  }
};

const getClient = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const clients = await prisma.client.findFirst({
      where: { email: req.body.email },
    });
    if (
      clients &&
      bcrypt.compareSync(req.body.password + pepper, clients.password!)
    ) {
      const token = jwt.sign(clients.password, secret);
      const data = { clients, token };
      res.json(data);
      return data;
    }
  } catch (err) {
    res.sendStatus(500);
    throw err;
  }
};

const verifyAuth = async (req: Request, res: Response) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader!.split("")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret);
    console.log(decodedToken);
    res.status(200).json(true);
  } catch (e) { 
    res.status(403).json(false);
  }
};

const createAirports = async (req: Request, res: Response) => {
  const newUser = await prisma.airport.createMany({ data: req.body });
  res.json(newUser);
};

const createAirlines = async (req: Request, res: Response) => {
  const newUser = await prisma.airline.createMany({ data: req.body });
  res.json(newUser);
};

const createEmployees = async (req: Request, res: Response) => {
  const newUser = await prisma.employee.createMany({ data: req.body });
  res.json(newUser);
};

const createAirportContents = async (req: Request, res: Response) => {
  const newUser = await prisma.airportContain.createMany({ data: req.body });
  res.json(newUser);
};

const createFlights = async (req: Request, res: Response) => {
  const newUser = await prisma.airlineFlights.createMany({ data: req.body });
  res.json(newUser);
};

const createAirportFlights = async (req: Request, res: Response) => {
  const newUser = await prisma.airportFlights.createMany({ data: req.body });
  res.json(newUser);
};

const createFlightsType = async (req: Request, res: Response) => {
  const newUser = await prisma.flightsType.createMany({ data: req.body });
  res.json(newUser);
};

const createStoppedFlights = async (req: Request, res: Response) => {
  const newUser = await prisma.stoppedFlights.createMany({ data: req.body });
  res.json(newUser);
};

const createTicket = async (req: Request, res: Response) => {
  const newUser = await prisma.ticket.create({ data: req.body });
  res.json(newUser);
};

const orderTicket = async (req: Request, res: Response) => {
  const newUser = await prisma.orderTicket.createMany({ data: req.body });
  res.json(newUser);
};

const bookTicket = async (req: Request, res: Response) => {
  const newUser = await prisma.booking.createMany({ data: req.body });
  res.json(newUser);
};

const cancelTicket = async (req: Request, res: Response) => {
  const newUser = await prisma.cancelling.createMany({ data: req.body });
  res.json(newUser);
};

const pay = async (req: Request, res: Response) => {
  const newUser = await prisma.payment.create({ data: req.body });
  res.json(newUser);
};

const creating = (app: express.Application) => {
  app.post("/client", createClients);
  app.post("/airport", createAirports);
  app.post("/airline", createAirlines);
  app.post("/employee", createEmployees);
  app.post("/contain", createAirportContents);
  app.post("/flight", createFlights);
  app.post("/airport/flight", createAirportFlights);
  app.post("/flight/type", createFlightsType);
  app.post("/flight/stopped", createStoppedFlights);
  app.post("/ticket", verifyAuth, createTicket);
  app.post("/ticket/order", verifyAuth, orderTicket);
  app.post("/ticket/book", verifyAuth, bookTicket);
  app.post("/ticket/cancel", verifyAuth, cancelTicket);
  app.post("/ticket/pay", verifyAuth, pay);
  app.get("/flights/all", getAllFlights);
  app.post("/verify", getClient);
};

export default creating;
