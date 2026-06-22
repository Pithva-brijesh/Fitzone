import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrendingContentCard = ({ content, type = 'exercise' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === 'exercise') {
      navigate('/exercise-details', { state: { exerciseId: content?.id } });
    } else if (type === 'community') {
      // Navigate to community post
    } else if (type === 'article') {
      // Navigate to knowledge hub article
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'exercise': return 'Dumbbell';
      case 'community': return 'MessageSquare';
      case 'article': return 'BookOpen';
      default: return 'Star';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'exercise': return 'text-primary';
      case 'community': return 'text-secondary';
      case 'article': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const formatEngagement = (count) => {
    if (count >= 1000) return `${(count / 1000)?.toFixed(1)}k`;
    return count?.toString();
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-card rounded-2xl overflow-hidden morphic-card border border-border cursor-pointer micro-celebration group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={content?.image}
          alt={content?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <div className={`w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center ${getTypeColor()}`}>
            <Icon name={getTypeIcon()} size={16} />
          </div>
        </div>
        {content?.isNew && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent text-accent-foreground text-xs font-poppins font-medium px-2 py-1 rounded-full">
              New
            </span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-poppins font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {content?.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {content?.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            {content?.likes && (
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={14} />
                <span>{formatEngagement(content?.likes)}</span>
              </div>
            )}
            {content?.views && (
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={14} />
                <span>{formatEngagement(content?.views)}</span>
              </div>
            )}
            {content?.comments && (
              <div className="flex items-center space-x-1">
                <Icon name="MessageCircle" size={14} />
                <span>{formatEngagement(content?.comments)}</span>
              </div>
            )}
          </div>
          
          {content?.difficulty && (
            <div className="flex items-center space-x-1">
              {[...Array(3)]?.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < content?.difficulty 
                      ? 'bg-primary' :'bg-muted'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {content?.author && (
          <div className="flex items-center space-x-2 pt-2 border-t border-border">
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-poppins font-medium">
                {content?.author?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              by {content?.author}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingContentCard;