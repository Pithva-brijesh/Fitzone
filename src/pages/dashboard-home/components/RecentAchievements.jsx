import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentAchievements = ({ achievements }) => {
  const getBadgeIcon = (type) => {
    const icons = {
      streak: 'Flame',
      workout: 'Dumbbell',
      level: 'Trophy',
      challenge: 'Target',
      social: 'Users',
      milestone: 'Star'
    };
    return icons?.[type] || 'Award';
  };

  const getBadgeColor = (type) => {
    const colors = {
      streak: 'text-accent bg-accent/10',
      workout: 'text-primary bg-primary/10',
      level: 'text-warning bg-warning/10',
      challenge: 'text-success bg-success/10',
      social: 'text-secondary bg-secondary/10',
      milestone: 'text-foreground bg-muted'
    };
    return colors?.[type] || 'text-muted-foreground bg-muted';
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  if (!achievements || achievements?.length === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-poppins font-semibold text-lg text-foreground">
            Recent Achievements
          </h2>
          <Icon name="Award" size={20} className="text-muted-foreground" />
        </div>
        <div className="text-center py-8">
          <Icon name="Trophy" size={48} className="text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">
            Complete your first workout to earn achievements!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 morphic-card border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-poppins font-semibold text-lg text-foreground">
          Recent Achievements
        </h2>
        <Icon name="Award" size={20} className="text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {achievements?.slice(0, 4)?.map((achievement) => (
          <div key={achievement?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBadgeColor(achievement?.type)}`}>
              <Icon name={getBadgeIcon(achievement?.type)} size={20} />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-poppins font-medium text-foreground text-sm">
                {achievement?.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {achievement?.description}
              </p>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-muted-foreground">
                {formatTimeAgo(achievement?.earnedAt)}
              </div>
              {achievement?.points && (
                <div className="text-xs font-mono font-semibold text-success">
                  +{achievement?.points} pts
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {achievements?.length > 4 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button className="w-full text-center text-sm text-primary hover:text-primary/80 font-poppins font-medium transition-colors duration-200">
            View All Achievements ({achievements?.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentAchievements;