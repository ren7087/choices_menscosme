-- CreateTable
CREATE TABLE "lips" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "price" INTEGER,
    "color" VARCHAR(100),
    "size" VARCHAR(100),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "lips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lip_lipType" (
    "lip_id" VARCHAR(100) NOT NULL,
    "lipType_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "lip_lipType_pkey" PRIMARY KEY ("lip_id","lipType_id")
);

-- CreateTable
CREATE TABLE "lipTypes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "lipTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfumes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "price" INTEGER,
    "color" VARCHAR(100),
    "size" VARCHAR(100),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "perfumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perfume_perfumeType" (
    "perfume_id" VARCHAR(100) NOT NULL,
    "perfumeype_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "perfume_perfumeType_pkey" PRIMARY KEY ("perfume_id","perfumeype_id")
);

-- CreateTable
CREATE TABLE "perfumeTypes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "perfumeTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skins" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "price" INTEGER,
    "color" VARCHAR(100),
    "size" VARCHAR(100),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "skins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skin_skinType" (
    "skin_id" VARCHAR(100) NOT NULL,
    "skinType_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "skin_skinType_pkey" PRIMARY KEY ("skin_id","skinType_id")
);

-- CreateTable
CREATE TABLE "skinTypes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "skinTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hairs" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "price" INTEGER,
    "color" VARCHAR(100),
    "size" VARCHAR(100),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "hairs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair_hairType" (
    "hair_id" VARCHAR(100) NOT NULL,
    "hairType_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "hair_hairType_pkey" PRIMARY KEY ("hair_id","hairType_id")
);

-- CreateTable
CREATE TABLE "hairTypes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "hairTypes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lipTypes_name_key" ON "lipTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "perfumeTypes_name_key" ON "perfumeTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "skinTypes_name_key" ON "skinTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "hairTypes_name_key" ON "hairTypes"("name");

-- AddForeignKey
ALTER TABLE "lip_lipType" ADD CONSTRAINT "lip_lipType_lip_id_fkey" FOREIGN KEY ("lip_id") REFERENCES "lips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lip_lipType" ADD CONSTRAINT "lip_lipType_lipType_id_fkey" FOREIGN KEY ("lipType_id") REFERENCES "lipTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perfume_perfumeType" ADD CONSTRAINT "perfume_perfumeType_perfume_id_fkey" FOREIGN KEY ("perfume_id") REFERENCES "perfumes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perfume_perfumeType" ADD CONSTRAINT "perfume_perfumeType_perfumeype_id_fkey" FOREIGN KEY ("perfumeype_id") REFERENCES "perfumeTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skin_skinType" ADD CONSTRAINT "skin_skinType_skin_id_fkey" FOREIGN KEY ("skin_id") REFERENCES "skins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skin_skinType" ADD CONSTRAINT "skin_skinType_skinType_id_fkey" FOREIGN KEY ("skinType_id") REFERENCES "skinTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hair_hairType" ADD CONSTRAINT "hair_hairType_hair_id_fkey" FOREIGN KEY ("hair_id") REFERENCES "hairs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hair_hairType" ADD CONSTRAINT "hair_hairType_hairType_id_fkey" FOREIGN KEY ("hairType_id") REFERENCES "hairTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
