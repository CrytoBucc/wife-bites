import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, ChefHat, Star, Printer, Share2, Heart } from 'lucide-react';
import { store } from '../lib/store';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState<any>(null);

  React.useEffect(() => {
    const loadRecipe = async () => {
      if (id) {
        const data = await store.getRecipeById(id);
        setRecipe(data);
      }
    };
    loadRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        Loading...
      </div>
    );
  }

  const ingredients = JSON.parse(recipe.ingredients);
  const steps = JSON.parse(recipe.steps);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="relative">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4 space-x-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Heart className="h-6 w-6 text-red-500" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Share2 className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Printer className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {recipe.title}
          </h1>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-gray-600 dark:text-gray-400">4.8</span>
              <span className="ml-1 text-gray-500 dark:text-gray-500">(128 reviews)</span>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <ChefHat className="h-5 w-5 mr-1" />
              {recipe.authorName}
            </div>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-400">{recipe.description}</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <Clock className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                {recipe.cookTime} min
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <Users className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                {recipe.servings} servings
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
              <ChefHat className="h-6 w-6 mx-auto text-indigo-600" />
              <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                {recipe.difficulty}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ingredients</h2>
            <ul className="mt-4 space-y-2">
              {ingredients.map((ingredient: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 dark:text-gray-400"
                >
                  <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Instructions</h2>
            <ol className="mt-4 space-y-4">
              {steps.map((step: string, index: number) => (
                <li
                  key={index}
                  className="flex text-gray-600 dark:text-gray-400"
                >
                  <span className="font-bold text-indigo-600 mr-4">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}