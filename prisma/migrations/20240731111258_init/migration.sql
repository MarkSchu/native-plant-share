-- CreateTable
CREATE TABLE "SharedPlant" (
    "id" TEXT NOT NULL,
    "commonName" TEXT NOT NULL,
    "latinName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "growthForm" TEXT NOT NULL,
    "sun" TEXT NOT NULL,
    "soil" TEXT NOT NULL,
    "height" TEXT NOT NULL,

    CONSTRAINT "SharedPlant_pkey" PRIMARY KEY ("id")
);
