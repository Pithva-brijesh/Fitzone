import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillTree = ({ skills }) => {
  const getSkillLevelColor = (level) => {
    if (level >= 80) return 'bg-success text-success-foreground';
    if (level >= 60) return 'bg-warning text-warning-foreground';
    if (level >= 40) return 'bg-accent text-accent-foreground';
    return 'bg-muted text-muted-foreground';
  };

  const getSkillLevelText = (level) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="morphic-card bg-card p-6 border border-border">
      <h3 className="font-poppins font-semibold text-lg text-foreground mb-6">
        Technical Skills Progress
      </h3>
      <div className="space-y-6">
        {skills?.map((skill) => (
          <div key={skill?.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg ${skill?.bgColor} flex items-center justify-center`}>
                  <Icon name={skill?.icon} size={20} className={skill?.iconColor} />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-foreground">
                    {skill?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill?.category}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono ${getSkillLevelColor(skill?.level)}`}>
                  {getSkillLevelText(skill?.level)}
                </span>
                <span className="font-mono text-sm text-foreground">
                  {skill?.level}%
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-500 contextual-gradient"
                  style={{ width: `${skill?.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Last practiced: {skill?.lastPracticed}</span>
                <span>Sessions: {skill?.sessions}</span>
              </div>
            </div>
            
            {skill?.achievements && skill?.achievements?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {skill?.achievements?.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-1 px-2 py-1 bg-success/10 text-success rounded-full text-xs"
                  >
                    <Icon name="Award" size={12} />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;