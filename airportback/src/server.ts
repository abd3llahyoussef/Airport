import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import creating from "./Routes/dataEntryRoute";
import Flights from "./Routes/Filter";
import ticketsOrder from "./Routes/orderTicket";

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const server: String = "0.0.0.0:7000";

const prisma = new PrismaClient();

async function main() {
  creating(app);
  Flights(app);
  ticketsOrder(app);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.listen(7000, () => {
  console.log(`server work on port:${server}`);
});

export default app;
