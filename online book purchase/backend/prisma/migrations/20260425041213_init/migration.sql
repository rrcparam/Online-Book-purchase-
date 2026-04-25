-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_userId_fkey";

-- AlterTable
ALTER TABLE "Wishlist" ALTER COLUMN "userId" SET DATA TYPE TEXT;
