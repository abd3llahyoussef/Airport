/*
  Warnings:

  - You are about to alter the column `passport` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `password` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `email` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "passport" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(20);

-- CreateTable
CREATE TABLE "Employee" (
    "SSN" TEXT NOT NULL,
    "firstName" VARCHAR(20) NOT NULL,
    "lastName" VARCHAR(20) NOT NULL,
    "birth" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" INTEGER,
    "salary" INTEGER NOT NULL,
    "supervisionId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("SSN")
);

-- CreateTable
CREATE TABLE "clientServing" (
    "id" SERIAL NOT NULL,
    "EmpId" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "clientServing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_supervisionId_fkey" FOREIGN KEY ("supervisionId") REFERENCES "Employee"("SSN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientServing" ADD CONSTRAINT "clientServing_EmpId_fkey" FOREIGN KEY ("EmpId") REFERENCES "Employee"("SSN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientServing" ADD CONSTRAINT "clientServing_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
