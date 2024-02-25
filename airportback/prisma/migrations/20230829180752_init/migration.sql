/*
  Warnings:

  - The primary key for the `flightsType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `flightType` column on the `flightsType` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "flightsType" DROP CONSTRAINT "flightsType_pkey",
DROP COLUMN "flightType",
ADD COLUMN     "flightType" SERIAL NOT NULL,
ADD CONSTRAINT "flightsType_pkey" PRIMARY KEY ("flightType");
