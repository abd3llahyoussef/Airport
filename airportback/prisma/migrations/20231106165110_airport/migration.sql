/*
  Warnings:

  - You are about to alter the column `seatNumber` on the `orderTicket` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "orderTicket" ALTER COLUMN "class" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "seatNumber" SET DATA TYPE VARCHAR(10);
