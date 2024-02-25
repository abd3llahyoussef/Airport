-- CreateTable
CREATE TABLE "ticket" (
    "ticketNumber" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "travelDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("ticketNumber")
);

-- CreateTable
CREATE TABLE "orderTicket" (
    "id" SERIAL NOT NULL,
    "class" VARCHAR(10) NOT NULL,
    "bagsWeight" INTEGER,
    "extraKilos" INTEGER,
    "seatNumber" INTEGER NOT NULL,
    "ticketId" TEXT NOT NULL,
    "flightId" INTEGER NOT NULL,

    CONSTRAINT "orderTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "bookingCode" TEXT NOT NULL,
    "bookingDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" VARCHAR(20) NOT NULL,
    "destination" VARCHAR(20) NOT NULL,
    "ticketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingCode")
);

-- CreateTable
CREATE TABLE "Cancelling" (
    "cancellationCode" TEXT NOT NULL,
    "surcharge" INTEGER NOT NULL,
    "cancelDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ticketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cancelling_pkey" PRIMARY KEY ("cancellationCode")
);

-- CreateTable
CREATE TABLE "Payment" (
    "cardNumber" INTEGER NOT NULL,
    "cardName" VARCHAR(20) NOT NULL,
    "Expaire" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CCV" INTEGER NOT NULL,
    "ticketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("cardNumber")
);

-- AddForeignKey
ALTER TABLE "orderTicket" ADD CONSTRAINT "orderTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("ticketNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderTicket" ADD CONSTRAINT "orderTicket_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "airlineFlights"("flightNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("ticketNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancelling" ADD CONSTRAINT "Cancelling_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("ticketNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancelling" ADD CONSTRAINT "Cancelling_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("ticketNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
