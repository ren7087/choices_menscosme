/*
  Warnings:

  - The `agreement` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `feeling` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Questionnaires" DROP COLUMN "agreement",
ADD COLUMN     "agreement" INTEGER,
DROP COLUMN "feeling",
ADD COLUMN     "feeling" INTEGER;
