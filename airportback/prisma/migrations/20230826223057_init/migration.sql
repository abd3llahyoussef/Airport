/*
  Warnings:

  - Added the required column `workAtId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "workAtId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Airport" (
    "APId" TEXT NOT NULL,
    "APname" VARCHAR(20) NOT NULL,
    "APcountry" VARCHAR(20) NOT NULL,
    "APstate" VARCHAR(20) NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("APId")
);

-- CreateTable
CREATE TABLE "Airline" (
    "ALId" TEXT NOT NULL,
    "ALname" VARCHAR(20) NOT NULL,
    "ALcode" VARCHAR(10) NOT NULL,

    CONSTRAINT "Airline_pkey" PRIMARY KEY ("ALId")
);

-- CreateTable
CREATE TABLE "airportContain" (
    "id" SERIAL NOT NULL,
    "airportId" TEXT NOT NULL,
    "airlineId" TEXT NOT NULL,

    CONSTRAINT "airportContain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "airlineFlights" (
    "flightNumber" SERIAL NOT NULL,
    "takeOffTime" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "takeOffDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "arrivelDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cityFrom" VARCHAR(20) NOT NULL,
    "cityTo" VARCHAR(20) NOT NULL,
    "Duration" INTEGER NOT NULL,
    "airlineId" TEXT NOT NULL,

    CONSTRAINT "airlineFlights_pkey" PRIMARY KEY ("flightNumber")
);

-- CreateTable
CREATE TABLE "airportFlights" (
    "id" SERIAL NOT NULL,
    "airportId" TEXT NOT NULL,
    "flightId" INTEGER NOT NULL,

    CONSTRAINT "airportFlights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flightsType" (
    "flightType" TEXT NOT NULL,
    "economicSeatsNumber" INTEGER NOT NULL,
    "businessSeatsNumber" INTEGER NOT NULL,
    "flightId" INTEGER NOT NULL,

    CONSTRAINT "flightsType_pkey" PRIMARY KEY ("flightType")
);

-- CreateTable
CREATE TABLE "stoppedFlights" (
    "id" SERIAL NOT NULL,
    "stopTime" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stopsNumber" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "stoppingAirportName" VARCHAR(20) NOT NULL,
    "stoppingAirportCountry" VARCHAR(20) NOT NULL,
    "flightId" INTEGER NOT NULL,

    CONSTRAINT "stoppedFlights_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_workAtId_fkey" FOREIGN KEY ("workAtId") REFERENCES "Airport"("APId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "airportContain" ADD CONSTRAINT "airportContain_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("APId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "airportContain" ADD CONSTRAINT "airportContain_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("ALId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "airlineFlights" ADD CONSTRAINT "airlineFlights_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("ALId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "airportFlights" ADD CONSTRAINT "airportFlights_airportId_fkey" FOREIGN KEY ("airportId") REFERENCES "Airport"("APId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "airportFlights" ADD CONSTRAINT "airportFlights_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "airlineFlights"("flightNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flightsType" ADD CONSTRAINT "flightsType_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "airlineFlights"("flightNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stoppedFlights" ADD CONSTRAINT "stoppedFlights_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "airlineFlights"("flightNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
