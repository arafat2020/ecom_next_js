/*
  Warnings:

  - You are about to drop the column `bannerId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suntitle` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_bannerId_fkey";

-- DropIndex
DROP INDEX "Product_subCategoryId_bannerId_idx";

-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "suntitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "bannerId";

-- CreateIndex
CREATE INDEX "Product_subCategoryId_idx" ON "Product"("subCategoryId");

-- AddForeignKey
ALTER TABLE "Banner" ADD CONSTRAINT "Banner_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
