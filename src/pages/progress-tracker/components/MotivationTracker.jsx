import React from 'react';
import Icon from '../../../components/AppIcon';

const MotivationTracker = ({ motivationData }) => {
  const getMoodIcon = (mood) => {
    const moodIcons = {
      excellent: 'Smile',
      good: 'Meh',
      average: 'Frown',
      poor: 'X'
    };
    return moodIcons?.[mood] || 'Meh';
  };

  const getMoodColor = (mood) => {
    const moodColors = {
      excellent: 'text-success',
      good: 'text-primary',
      average: 'text-warning',
      poor: 'text-destructive'
    };
    return moodColors?.[mood] || 'text-muted-foreground';
  };

  const getEnergyBarColor = (level) => {
    if (level >= 80) return 'bg-success';
    if (level >= 60) return 'bg-primary';
    if (level >= 40) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Weekly Mood Tracking */}
      <div className="morphic-card bg-card p-6 border border-border">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
          Weekly Mood Check-ins
        </h3>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {motivationData?.weeklyMoods?.map((day) => (
            <div key={day?.date} className="text-center">
              <div className="text-xs text-muted-foreground mb-2">
                {day?.dayName}
              </div>
              <div className={`w-12 h-12 rounded-full border-2 border-border flex items-center justify-center mx-auto ${day?.mood ? 'bg-muted' : 'bg-background'}`}>
                {day?.mood ? (
                  <Icon 
                    name={getMoodIcon(day?.mood)} 
                    size={20} 
                    className={getMoodColor(day?.mood)} 
                  />
                ) : (
                  <span className="text-muted-foreground text-xs">?</span>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {day?.date}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Tap to log today's mood
        </div>
      </div>
      {/* Energy Levels */}
      <div className="morphic-card bg-card p-6 border border-border">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
          Energy Levels
        </h3>
        
        <div className="space-y-4">
          {motivationData?.energyLevels?.map((entry) => (
            <div key={entry?.date} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-primary" />
                </div>
                <div>
                  <div className="font-poppins font-medium text-sm text-foreground">
                    {entry?.date}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {entry?.time}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getEnergyBarColor(entry?.level)}`}
                    style={{ width: `${entry?.level}%` }}
                  ></div>
                </div>
                <span className="font-mono text-sm text-foreground w-8">
                  {entry?.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Goal Completion */}
      <div className="morphic-card bg-card p-6 border border-border">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
          Goal Completion Rate
        </h3>
        
        <div className="space-y-4">
          {motivationData?.goals?.map((goal) => (
            <div key={goal?.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg ${goal?.completed ? 'bg-success' : 'bg-muted'} flex items-center justify-center`}>
                    <Icon 
                      name={goal?.completed ? 'CheckCircle' : 'Circle'} 
                      size={16} 
                      className={goal?.completed ? 'text-success-foreground' : 'text-muted-foreground'} 
                    />
                  </div>
                  <div>
                    <div className="font-poppins font-medium text-sm text-foreground">
                      {goal?.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Due: {goal?.dueDate}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-mono text-sm text-foreground">
                    {goal?.progress}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {goal?.completedTasks}/{goal?.totalTasks} tasks
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${goal?.completed ? 'bg-success' : 'contextual-gradient'}`}
                  style={{ width: `${goal?.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotivationTracker;