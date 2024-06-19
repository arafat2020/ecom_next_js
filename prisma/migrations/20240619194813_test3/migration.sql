-- DropIndex
DROP INDEX "Product_subCategoryId_idx";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "bannerId" TEXT;

-- CreateTable
CREATE TABLE "Banner" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Product_subCategoryId_bannerId_idx" ON "Product"("subCategoryId", "bannerId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_bannerId_fkey" FOREIGN KEY ("bannerId") REFERENCES "Banner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
