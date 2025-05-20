import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: keyof typeof LucideIcons;
  };
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = LucideIcons[category.icon];

  if (!IconComponent) {
    console.warn(`Icon "${category.icon}" not found in Lucide icons`);
    return null;
  }

  return (
    <Link 
      to={`/categories/${category.id}`}
      className="group flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-card transition-all hover:shadow-hover dark:bg-neutral-800 hover-scale"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-50 text-secondary-500 transition-colors group-hover:bg-secondary-100 dark:bg-secondary-900/30 dark:text-secondary-400 dark:group-hover:bg-secondary-900/50">
        <IconComponent className="h-8 w-8" />
      </div>
      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
        {category.name}
      </h3>
    </Link>
  );
};