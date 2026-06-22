import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalBadges = ({ badges, currentGoals }) => {
  const getBadgeIcon = (category) => {
    const icons = {
      fitness: 'Dumbbell',
      social: 'Users',
      achievement: 'Trophy',
      streak: 'Flame',
      challenge: 'Target',
      milestone: 'Star'
    };
    return icons?.[category] || 'Award';
  };

  const getBadgeColor = (rarity) => {
    const colors = {
      common: 'bg-muted text-muted-foreground',
      rare: 'bg-primary/10 text-primary',
      epic: 'bg-secondary/10 text-secondary',
      legendary: 'bg-warning/10 text-warning'
    };
    return colors?.[rarity] || 'bg-muted text-muted-foreground';
  };

  const getGoalProgress = (goal) => {
    return Math.min((goal?.current / goal?.target) * 100, 100);
  };

  const getGoalIcon = (type) => {
    const icons = {
      weight: 'Scale',
      cardio: 'Heart',
      strength: 'Dumbbell',
      flexibility: 'Zap',
      endurance: 'Timer',
      social: 'Users'
    };
    return icons?.[type] || 'Target';
  };

  return (
    <div className="space-y-6">
      {/* Personal Badges */}
      <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            Your Badges
          </h2>
          <Icon name="Award" size={20} className="text-muted-foreground" />
        </div>

        {badges && badges?.length > 0 ? (
          <div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              {badges?.slice(0, 8)?.map((badge) => (
                <div
                  key={badge?.id}
                  className="group text-center p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
                  title={badge?.description}
                >
                  <div className={`w-12 h-12 rounded-full ${getBadgeColor(badge?.rarity)} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon name={getBadgeIcon(badge?.category)} size={20} />
                  </div>
                  <h3 className="font-poppins font-medium text-xs text-foreground line-clamp-1">
                    {badge?.name}
                  </h3>
                  <p className="text-xs text-muted-foreground capitalize">
                    {badge?.rarity}
                  </p>
                </div>
              ))}
            </div>
            
            {badges?.length > 8 && (
              <div className="text-center pt-4 border-t border-border">
                <button className="text-sm text-primary hover:text-primary/80 font-poppins font-medium transition-colors duration-200">
                  View All Badges ({badges?.length})
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="Medal" size={48} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">
              Complete workouts and challenges to earn badges!
            </p>
          </div>
        )}
      </div>
      {/* Current Goals */}
      <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            Current Goals
          </h2>
          <Icon name="Target" size={20} className="text-muted-foreground" />
        </div>

        {currentGoals && currentGoals?.length > 0 ? (
          <div className="space-y-4">
            {currentGoals?.slice(0, 3)?.map((goal) => {
              const progress = getGoalProgress(goal);
              
              return (
                <div key={goal?.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={getGoalIcon(goal?.type)} size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-medium text-sm text-foreground">
                          {goal?.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {goal?.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-mono text-sm font-semibold text-foreground">
                        {goal?.current}/{goal?.target}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {goal?.unit}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{Math.round(progress)}% complete</span>
                    <span>Due: {new Date(goal.deadline)?.toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
            
            <div className="pt-4 border-t border-border">
              <button className="w-full text-center text-sm text-primary hover:text-primary/80 font-poppins font-medium transition-colors duration-200">
                Manage Goals
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="Plus" size={48} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-4">
              Set your first fitness goal to track progress!
            </p>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-poppins font-medium hover:bg-primary/90 transition-colors duration-200">
              Create Goal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalBadges;