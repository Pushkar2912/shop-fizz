/*
  Warnings:

  - You are about to drop the column `productId` on the `categories` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_productId_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "categoriesId" TEXT;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
