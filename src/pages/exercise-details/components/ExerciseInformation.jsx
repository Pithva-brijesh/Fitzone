import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const ExerciseInformation = ({ exercise }) => {
  const [activeTab, setActiveTab] = useState('instructions');

  const tabs = [
    { id: 'instructions', label: 'Instructions', icon: 'List' },
    { id: 'muscles', label: 'Muscles', icon: 'Zap' },
    { id: 'equipment', label: 'Equipment', icon: 'Dumbbell' },
    { id: 'safety', label: 'Safety', icon: 'Shield' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'instructions':
        return (
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
              Step-by-Step Instructions
            </h3>
            <div className="space-y-3">
              {exercise?.instructions?.map((step, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-poppins font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'muscles':
        return (
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
              Targeted Muscle Groups
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-poppins font-medium text-foreground mb-3">Primary Muscles</h4>
                <div className="space-y-2">
                  {exercise?.primaryMuscles?.map((muscle, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{muscle}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-poppins font-medium text-foreground mb-3">Secondary Muscles</h4>
                <div className="space-y-2">
                  {exercise?.secondaryMuscles?.map((muscle, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                      <span className="text-muted-foreground">{muscle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
              Required Equipment
            </h3>
            {exercise?.equipment?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercise?.equipment?.map((item, index) => (
                  <div key={index} className="p-4 bg-card border border-border rounded-lg morphic-card">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="Dumbbell" size={24} className="text-accent" />
                      </div>
                      <div>
                        <h5 className="font-poppins font-medium text-foreground">{item?.name}</h5>
                        {item?.alternative && (
                          <p className="text-sm text-muted-foreground">Alt: {item?.alternative}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground mb-2">No Equipment Needed</h4>
                <p className="text-muted-foreground">This exercise can be performed with just your body weight!</p>
              </div>
            )}
          </div>
        );

      case 'safety':
        return (
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
              Safety Guidelines
            </h3>
            <div className="space-y-4">
              {exercise?.safetyTips?.map((tip, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <Icon name="AlertTriangle" size={20} className="text-warning flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-error/10 border border-error/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="AlertCircle" size={20} className="text-error flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-poppins font-semibold text-error mb-2">Important Notice</h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    Always consult with a healthcare professional before starting any new exercise program. 
                    Stop immediately if you experience pain, dizziness, or discomfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 morphic-card">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`
              flex items-center space-x-2 px-4 py-3 rounded-t-lg font-poppins font-medium text-sm
              transition-all duration-200 micro-celebration
              ${activeTab === tab?.id
                ? 'bg-primary text-primary-foreground border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ExerciseInformation;