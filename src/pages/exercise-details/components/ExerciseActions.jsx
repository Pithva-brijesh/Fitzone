import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExerciseActions = ({ exercise, onBookmark, onShare, onStartWorkout }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark(exercise?.id, !isBookmarked);
  };

  const handleShare = (platform) => {
    const shareData = {
      title: `Check out this ${exercise?.name} exercise!`,
      text: `I'm working on ${exercise?.name} - a great ${exercise?.category} exercise. Join me on FitZone!`,
      url: window.location?.href
    };

    switch (platform) {
      case 'native':
        if (navigator.share) {
          navigator.share(shareData);
        }
        break;
      case 'copy':
        navigator.clipboard?.writeText(window.location?.href);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData?.text)}&url=${encodeURIComponent(shareData?.url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData?.url)}`);
        break;
      default:
        break;
    }

    onShare(exercise?.id, platform);
    setShowShareMenu(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 morphic-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-poppins font-semibold text-xl text-foreground">Quick Actions</h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Users" size={16} />
          <span>1,247 people completed this</span>
        </div>
      </div>

      {/* Primary Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={() => onStartWorkout(exercise)}
          iconName="Play"
          iconPosition="left"
        >
          Start Workout
        </Button>

        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={handleBookmark}
          iconName={isBookmarked ? "BookmarkCheck" : "Bookmark"}
          iconPosition="left"
        >
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </Button>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors duration-200 micro-celebration">
          <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
            <Icon name="Plus" size={20} className="text-success" />
          </div>
          <span className="text-xs text-foreground font-medium">Add to Routine</span>
        </button>

        <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors duration-200 micro-celebration">
          <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
            <Icon name="Calendar" size={20} className="text-warning" />
          </div>
          <span className="text-xs text-foreground font-medium">Schedule</span>
        </button>

        <button className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors duration-200 micro-celebration">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="BarChart3" size={20} className="text-primary" />
          </div>
          <span className="text-xs text-foreground font-medium">View Stats</span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="w-full flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-muted transition-colors duration-200 micro-celebration"
          >
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Share" size={20} className="text-accent" />
            </div>
            <span className="text-xs text-foreground font-medium">Share</span>
          </button>

          {/* Share Menu */}
          {showShareMenu && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-10 morphic-card">
              <div className="p-2">
                <button
                  onClick={() => handleShare('native')}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="Share" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">Share via...</span>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="Copy" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">Copy Link</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="Twitter" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="Facebook" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">Facebook</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="border-t border-border pt-6">
        <h4 className="font-poppins font-medium text-foreground mb-4">Your Progress</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-mono text-lg font-semibold text-primary">12</div>
            <div className="text-xs text-muted-foreground">Times Completed</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-mono text-lg font-semibold text-success">85%</div>
            <div className="text-xs text-muted-foreground">Best Form Score</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="font-mono text-lg font-semibold text-warning">7d</div>
            <div className="text-xs text-muted-foreground">Last Performed</div>
          </div>
        </div>
      </div>

      {/* Achievement Badge */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Icon name="Award" size={24} color="white" />
          </div>
          <div>
            <h4 className="font-poppins font-semibold text-foreground">Core Crusher</h4>
            <p className="text-sm text-muted-foreground">Complete 5 more core exercises to unlock this badge!</p>
            <div className="mt-2 w-full bg-primary/20 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseActions;
