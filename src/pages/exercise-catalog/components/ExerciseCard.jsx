import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExerciseCard = ({ 
  exercise = {},
  onBookmark = () => {},
  onAddToRoutine = () => {},
  isBookmarked = false
}) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const getDifficultyColor = (level) => {
    const colors = {
      'Beginner': 'bg-success text-success-foreground',
      'Intermediate': 'bg-warning text-warning-foreground',
      'Advanced': 'bg-error text-error-foreground'
    };
    return colors?.[level] || 'bg-muted text-muted-foreground';
  };

  const handleCardClick = () => {
    navigate('/exercise-details', { state: { exerciseId: exercise?.id } });
  };

  const handleBookmarkClick = (e) => {
    e?.stopPropagation();
    onBookmark(exercise?.id);
  };

  const handleAddToRoutine = (e) => {
    e?.stopPropagation();
    onAddToRoutine(exercise);
  };

  return (
    <div 
      className="group morphic-card bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onClick={handleCardClick}
    >
      {/* Exercise Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={exercise?.image}
          alt={exercise?.imageAlt}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Bookmark Button */}
        <button
          onClick={handleBookmarkClick}
          className={`
            absolute top-3 right-3 w-8 h-8 rounded-full
            flex items-center justify-center transition-all duration-200
            micro-celebration hover:scale-110
            ${isBookmarked 
              ? 'bg-accent text-accent-foreground' 
              : 'bg-white/90 text-gray-600 hover:bg-white'
            }
          `}
        >
          <Icon 
            name={isBookmarked ? 'Bookmark' : 'BookmarkPlus'} 
            size={16} 
          />
        </button>

        {/* Difficulty Badge */}
        <div className="absolute top-3 left-3">
          <span className={`
            px-2 py-1 rounded-lg text-xs font-poppins font-medium
            ${getDifficultyColor(exercise?.difficulty)}
          `}>
            {exercise?.difficulty}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-black/70 text-white px-2 py-1 rounded-lg flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span className="text-xs font-mono">{exercise?.duration}</span>
          </div>
        </div>
      </div>
      {/* Exercise Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
            {exercise?.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {exercise?.description}
          </p>
        </div>

        {/* Exercise Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Icon name="Target" size={12} />
              <span>{exercise?.muscleGroups?.join(', ') || 'Full Body'}</span>
            </div>
            {exercise?.equipment && (
              <div className="flex items-center space-x-1">
                <Icon name="Dumbbell" size={12} />
                <span>{exercise?.equipment}</span>
              </div>
            )}
          </div>
          
          {exercise?.rating && (
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} className="text-warning fill-current" />
              <span className="font-mono">{exercise?.rating}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Play"
            iconPosition="left"
            className="flex-1"
            onClick={handleCardClick}
          >
            Start
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Plus"
            onClick={handleAddToRoutine}
            className="px-3"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;