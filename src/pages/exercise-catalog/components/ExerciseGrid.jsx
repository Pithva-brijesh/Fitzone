import React from 'react';
import ExerciseCard from './ExerciseCard';
import Icon from '../../../components/AppIcon';

const ExerciseGrid = ({
  exercises = [],
  bookmarkedExercises = [],
  onBookmark = () => {},
  onAddToRoutine = () => {},
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 })?.map((_, index) => (
          <div key={index} className="morphic-card bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-48 bg-muted animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-muted rounded animate-pulse"></div>
              <div className="h-3 bg-muted rounded animate-pulse w-3/4"></div>
              <div className="flex space-x-2">
                <div className="h-8 bg-muted rounded animate-pulse flex-1"></div>
                <div className="h-8 w-12 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (exercises?.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
          <Icon name="Search" size={40} className="text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="font-poppins font-semibold text-xl text-foreground">
            No exercises found
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try adjusting your search terms or filters to find the perfect workout for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {exercises?.map((exercise) => (
        <ExerciseCard
          key={exercise?.id}
          exercise={exercise}
          isBookmarked={bookmarkedExercises?.includes(exercise?.id)}
          onBookmark={onBookmark}
          onAddToRoutine={onAddToRoutine}
        />
      ))}
    </div>
  );
};

export default ExerciseGrid;