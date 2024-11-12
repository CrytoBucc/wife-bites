import { nanoid } from 'nanoid';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string;
  steps: string;
  imageUrl?: string;
  cookTime: number;
  servings: number;
  difficulty: string;
  authorName: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

class Store {
  private recipes: Recipe[] = [
    {
      id: '1',
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
      category: 'Main Dishes',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipes;
  }

  async getRecipeById(id: string): Promise<Recipe | null> {
    return this.recipes.find(recipe => recipe.id === id) || null;
  }

  async createRecipe(data: Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>): Promise<Recipe> {
    const recipe: Recipe = {
      ...data,
      id: nanoid(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.recipes.push(recipe);
    return recipe;
  }

  async updateRecipe(id: string, data: Partial<Recipe>): Promise<Recipe | null> {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index === -1) return null;

    const updatedRecipe = {
      ...this.recipes[index],
      ...data,
      updatedAt: new Date()
    };
    this.recipes[index] = updatedRecipe;
    return updatedRecipe;
  }

  async deleteRecipe(id: string): Promise<boolean> {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index === -1) return false;
    
    this.recipes.splice(index, 1);
    return true;
  }
}

export const store = new Store();