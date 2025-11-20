import { PrismaClient } from '../node_modules/.prisma/client/default.js';
const prisma = new PrismaClient();

async function main() {
    console.log(12)
  // Create main categories
  const fashion = await prisma.category.create({
    data: { name: "Fashion", parent_id: null }
  });

  const accessories = await prisma.category.create({
    data: { name: "Accessories", parent_id: null  }
  });

  // Create sub categories under Fashion
  const hoodie = await prisma.category.create({
    data: { name: "Hoodie", parent_id: fashion.id }
  });

  const bags = await prisma.category.create({
    data: { name: "Bags", parent_id: accessories.id }
  });

  // Create product
  const product = await prisma.product.createMany({
    data: [
      {
        name: "Leather Handbag",
        description: "High quality leather handbag.",
        section: "women",
        price: 1250,
        stock: 10,
      },
      {
        name: "Hoodie Jacket",
        description: "High quality Hoodie Jacket.",
        section: "men",
        price: 1650,
        stock: 15,
      }
    ]
  });

  // Link product to categories (Fashion → Bags)
  await prisma.product_category.create({
    data: {
      product_id: 1, 
      category_id: 4
    }
  });

   await prisma.product_category.create({
    data: {
      product_id: 2, 
      category_id: 3
    }
  });

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());