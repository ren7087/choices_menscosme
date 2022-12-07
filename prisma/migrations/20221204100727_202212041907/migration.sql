/*
  Warnings:

  - The `lip` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eye` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hair` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `perfume` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skin` column on the `Questionnaires` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Questionnaires" DROP COLUMN "lip",
ADD COLUMN     "lip" BOOLEAN DEFAULT false,
DROP COLUMN "eye",
ADD COLUMN     "eye" BOOLEAN DEFAULT false,
DROP COLUMN "hair",
ADD COLUMN     "hair" BOOLEAN DEFAULT false,
DROP COLUMN "perfume",
ADD COLUMN     "perfume" BOOLEAN DEFAULT false,
DROP COLUMN "skin",
ADD COLUMN     "skin" BOOLEAN DEFAULT false;
