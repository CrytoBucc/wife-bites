import express from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const RecipeSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  ingredients: z.string(),
  steps: z.string(),
  imageUrl: z.string().url().optional(),
  cookTime: z.number().positive(),
  servings: z.number().positive(),
  difficulty: z.string(),
  authorName: z.string(),
  category: z.string(),
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/recipes', async (_req, res) => {
  try {
    const recipes = await prisma.recipe.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

app.post('/api/recipes', async (req, res) => {
  try {
    const validatedData = RecipeSchema.parse(req.body);
    const recipe = await prisma.recipe.create({
      data: validatedData,
    });
    res.status(201).json(recipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid data', details: error.errors });
    } else {
      res.status(500).json({ error: 'Failed to create recipe' });
    }
  }
});

app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: req.params.id },
    });

    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});