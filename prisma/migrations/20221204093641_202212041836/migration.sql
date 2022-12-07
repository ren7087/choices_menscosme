-- CreateTable
CREATE TABLE "Questionnaires" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "agreement" VARCHAR(100),
    "feeling" INTEGER,
    "date" VARCHAR(100),
    "lip" VARCHAR(100),
    "eye" TEXT,
    "hair" TEXT,
    "perfume" TEXT,
    "skin" TEXT,

    CONSTRAINT "Questionnaires_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questionnaires" ADD CONSTRAINT "Questionnaires_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
