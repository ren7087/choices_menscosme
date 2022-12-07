/*
  Warnings:

  - You are about to alter the column `eye` on the `Questionnaires` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `hair` on the `Questionnaires` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `perfume` on the `Questionnaires` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `skin` on the `Questionnaires` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Questionnaires" ALTER COLUMN "feeling" SET DATA TYPE TEXT,
ALTER COLUMN "eye" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "hair" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "perfume" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "skin" SET DATA TYPE VARCHAR(100);
