import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingChallenges = ({ challenges }) => {
  const navigate = useNavigate();

  const getDaysRemaining = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  };

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'text-success bg-success/10',
      intermediate: 'text-warning bg-warning/10',
      advanced: 'text-destructive bg-destructive/10'
    };
    return colors?.[difficulty] || 'text-muted-foreground bg-muted';
  };

  if (!challenges || challenges?.length === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            Upcoming Challenges
          </h2>
          <Icon name="Target" size={20} className="text-muted-foreground" />
        </div>
        <div className="text-center py-8">
          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm mb-4">
            No active challenges right now
          </p>
          <Button variant="outline" size="sm">
            Browse Challenges
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-poppins font-semibold text-lg text-foreground">
          Active Challenges
        </h2>
        <Icon name="Target" size={20} className="text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {challenges?.slice(0, 3)?.map((challenge) => {
          const daysLeft = getDaysRemaining(challenge?.endDate);
          const progress = getProgressPercentage(challenge?.currentProgress, challenge?.target);
          
          return (
            <div key={challenge?.id} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-poppins font-medium text-foreground text-sm mb-1">
                    {challenge?.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {challenge?.description}
                  </p>
                </div>
                
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge?.difficulty)}`}>
                  {challenge?.difficulty}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-mono font-semibold text-foreground">
                    {challenge?.currentProgress}/{challenge?.target} {challenge?.unit}
                  </span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{daysLeft} days left</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{challenge?.participants?.toLocaleString()} joined</span>
                    </div>
                  </div>
                  
                  {challenge?.reward && (
                    <div className="flex items-center space-x-1 text-xs text-warning">
                      <Icon name="Gift" size={12} />
                      <span>{challenge?.reward}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <Button 
          variant="outline" 
          fullWidth 
          iconName="Plus" 
          iconPosition="left"
          onClick={() => navigate('/challenges')}
        >
          Join More Challenges
        </Button>
      </div>
    </div>
  );
};

export default UpcomingChallenges;