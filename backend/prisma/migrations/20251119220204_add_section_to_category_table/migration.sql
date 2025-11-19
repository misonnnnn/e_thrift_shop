/*
  Warnings:

  - You are about to alter the column `status` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `status` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `section` ENUM('men', 'women', 'sale') NULL,
    MODIFY `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE `product` MODIFY `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active';

