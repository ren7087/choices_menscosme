-- CreateTable
CREATE TABLE "YourLip" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "jas" TEXT,

    CONSTRAINT "YourLip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YourEye" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "jas" TEXT,

    CONSTRAINT "YourEye_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YourHair" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "jas" TEXT,

    CONSTRAINT "YourHair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YourPerfume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "jas" TEXT,

    CONSTRAINT "YourPerfume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YourSkin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "jas" TEXT,

    CONSTRAINT "YourSkin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YourLip" ADD CONSTRAINT "YourLip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YourEye" ADD CONSTRAINT "YourEye_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YourHair" ADD CONSTRAINT "YourHair_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YourPerfume" ADD CONSTRAINT "YourPerfume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YourSkin" ADD CONSTRAINT "YourSkin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
