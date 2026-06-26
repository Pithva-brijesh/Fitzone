import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ 
  categories = [], 
  activeCategory = 'all', 
  onCategoryChange = () => {},
  exerciseCounts = {}
}) => {
  const allCategories = [
    { 
      id: 'all', 
      name: 'All Exercises', 
      icon: 'Grid3X3',
      color: 'bg-primary text-primary-foreground'
    },
    ...categories
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-poppins font-semibold text-lg text-foreground">
          Exercise Categories
        </h2>
        <div className="text-sm text-muted-foreground">
          {Object.values(exerciseCounts)?.reduce((a, b) => a + b, 0)} total exercises
        </div>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-4">
        {allCategories?.map((category) => {
          const isActive = activeCategory === category?.id;
          const count = exerciseCounts?.[category?.id] || 0;
          
          return (
            <button
              key={category?.id}
              onClick={() => onCategoryChange(category?.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-xl
                font-poppins font-medium text-sm transition-all duration-200
                micro-celebration hover:scale-105
                ${isActive 
                  ? category?.color || 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }
              `}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
              {count > 0 && (
                <span className={`
                  px-2 py-0.5 rounded-full text-xs font-mono
                  ${isActive 
                    ? 'bg-white/20 text-current' :'bg-primary/10 text-primary'
                  }
                `}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;