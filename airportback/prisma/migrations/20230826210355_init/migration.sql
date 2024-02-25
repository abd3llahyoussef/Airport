-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Fname" VARCHAR(50) NOT NULL,
    "Lname" VARCHAR(50) NOT NULL,
    "country" VARCHAR(20) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "street" VARCHAR(20) NOT NULL,
    "sex" VARCHAR(5) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_passport_key" ON "Client"("passport");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
