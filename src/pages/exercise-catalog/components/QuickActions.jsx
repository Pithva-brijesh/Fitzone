import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({
  onCreateRoutine = () => {},
  onViewBookmarks = () => {},
  onRandomWorkout = () => {},
  bookmarkCount = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions = [
    {
      id: 'create-routine',
      label: 'Create Routine',
      icon: 'Plus',
      description: 'Build a custom workout',
      color: 'bg-primary text-primary-foreground',
      action: onCreateRoutine
    },
    {
      id: 'view-bookmarks',
      label: 'My Bookmarks',
      icon: 'Bookmark',
      description: `${bookmarkCount} saved exercises`,
      color: 'bg-accent text-accent-foreground',
      action: onViewBookmarks,
      badge: bookmarkCount > 0 ? bookmarkCount : null
    },
    {
      id: 'random-workout',
      label: 'Random Workout',
      icon: 'Shuffle',
      description: 'Get a surprise routine',
      color: 'bg-secondary text-secondary-foreground',
      action: onRandomWorkout
    }
  ];

  return (
    <div className="w-full">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200"
        >
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="font-poppins font-medium text-foreground">Quick Actions</span>
          </div>
          <Icon 
            name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
            size={20} 
            className="text-muted-foreground" 
          />
        </button>
      </div>
      {/* Actions Grid */}
      <div
  className={`
    grid gap-3 transition-all duration-300
    grid-cols-1 lg:grid-cols-3
    ${isExpanded ? "block" : "hidden lg:grid"}
  `}
>
        {quickActions?.map((action) => (
          <button
            key={action?.id}
            onClick={action?.action}
            className={`
              relative p-4 rounded-xl text-left transition-all duration-200
              micro-celebration hover:scale-105 hover:shadow-md
              ${action?.color}
            `}
          >
            {action?.badge && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-900 text-xs font-mono font-semibold rounded-full flex items-center justify-center">
                {action?.badge > 9 ? '9+' : action?.badge}
              </span>
            )}
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name={action?.icon} size={20} />
              </div>
              <div className="flex-1">
                <div className="font-poppins font-semibold text-sm">
                  {action?.label}
                </div>
                <div className="text-xs opacity-80 mt-0.5">
                  {action?.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Motivational Quote */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Icon name="Quote" size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium italic">
              "The only bad workout is the one that didn't happen."
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              - Fitness Motivation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;