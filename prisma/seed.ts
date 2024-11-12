import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some sample recipes
  await Promise.all([
    prisma.recipe.create({
      data: {
        title: 'Perfect Pasta Carbonara',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
        ingredients: JSON.stringify([
          '400g spaghetti',
          '200g pancetta',
          '4 large eggs',
          '100g Pecorino Romano',
          'Black pepper',
          'Salt'
        ]),
        steps: JSON.stringify([
          'Boil pasta in salted water',
          'Cook pancetta until crispy',
          'Mix eggs and cheese',
          'Combine all ingredients',
          'Serve hot with extra cheese'
        ]),
        imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
        cookTime: 30,
        servings: 4,
        difficulty: 'Medium',
        authorName: 'Maria Romano',
        category: 'Main Dishes'
      }
    }),
    prisma.recipe.create({
      data: {
        title: 'Classic French Croissants',
        description: 'Buttery, flaky, and perfectly golden brown croissants made from scratch.',
        ingredients: JSON.stringify([
          '500g bread flour',
          '250g butter',
          '7g active dry yeast',
          '60g sugar',
          'Salt'
        ]),
        steps: JSON.stringify([
          'Make the dough',
          'Laminate with butter',
          'Shape croissants',
          'Proof and egg wash',
          'Bake until golden'
        ]),
        imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
        cookTime: 180,
        servings: 8,
        difficulty: 'Advanced',
        authorName: 'Jean Pierre',
        category: 'Breakfast'
      }
    })
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });