import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { store } from '../lib/store';

export default function Recipes() {
  const [recipes, setRecipes] = React.useState([] as any[]);

  React.useEffect(() => {
    const loadRecipes = async () => {
      const data = await store.getAllRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          All Recipes
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Discover our collection of delicious recipes
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src={recipe.imageUrl} alt={recipe.title} />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {recipe.title}
                </h3>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                  {recipe.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.cookTime} min
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} servings
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-4 w-4 mr-1" />
                    {recipe.authorName}
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}