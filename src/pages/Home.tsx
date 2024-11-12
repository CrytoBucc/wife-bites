import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedRecipes from '../components/FeaturedRecipes';
import TrendingSection from '../components/TrendingSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedRecipes />
      <TrendingSection />
    </div>
  );
}