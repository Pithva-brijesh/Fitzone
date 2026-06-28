import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ achievements }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Badges', icon: 'Award' },
        { id: 'strength', label: 'Strength', icon: 'Dumbbell' },
        { id: 'endurance', label: 'Endurance', icon: 'Heart' },
        { id: 'consistency', label: 'Consistency', icon: 'Calendar' },
        { id: 'social', label: 'Social', icon: 'Users' }
    ];

    const filteredAchievements = selectedCategory === 'all'
        ? achievements
        : achievements?.filter(achievement => achievement?.category === selectedCategory);

    const getBadgeStyle = (rarity) => {
        const styles = {
            common: 'bg-muted text-muted-foreground border-muted',
            rare: 'bg-primary/10 text-primary border-primary/20',
            epic: 'bg-secondary/10 text-secondary border-secondary/20',
            legendary: 'contextual-gradient text-foreground border-primary/30'
        };
        return styles?.[rarity] || styles?.common;
    };

    const getRarityIcon = (rarity) => {
        const icons = {
            common: 'Award',
            rare: 'Star',
            epic: 'Crown',
            legendary: 'Zap'
        };
        return icons?.[rarity] || 'Award';
    };

    return (
        <div className="morphic-card bg-card p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins font-semibold text-lg text-foreground">
                    Achievement Badges
                </h3>
                <div className="text-sm text-muted-foreground">
                    {achievements?.filter(a => a?.unlocked)?.length}/{achievements?.length} unlocked
                </div>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
                {categories?.map((category) => (
                    <button
                        key={category?.id}
                        onClick={() => setSelectedCategory(category?.id)}
                        className={`
              flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-poppins font-medium
              transition-all duration-200 micro-celebration
              ${selectedCategory === category?.id
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }
            `}
                    >
                        <Icon name={category?.icon} size={16} />
                        <span>{category?.label}</span>
                    </button>
                ))}
            </div>
            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAchievements?.map((achievement) => (
                    <div
                        key={achievement?.id}
                        className={`
              relative p-4 rounded-xl border-2 transition-all duration-200
              ${achievement?.unlocked
                                ? `${getBadgeStyle(achievement?.rarity)} micro-celebration cursor-pointer hover:scale-105`
                                : 'bg-muted/50 text-muted-foreground border-muted opacity-60'
                            }
            `}
                    >
                        {/* Badge Icon */}
                        <div className="text-center mb-3">
                            <div className={`
                w-16 h-16 rounded-full mx-auto flex items-center justify-center
                ${achievement?.unlocked
                                    ? achievement?.rarity === 'legendary' ? 'contextual-gradient' : 'bg-current/10' : 'bg-muted'
                                }
              `}>
                                <Icon
                                    name={getRarityIcon(achievement?.rarity)}
                                    size={32}
                                    className={achievement?.unlocked ? 'text-current' : 'text-muted-foreground'}
                                />
                            </div>

                            {achievement?.unlocked && achievement?.isNew && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold breathing-animation">
                                    !
                                </div>
                            )}
                        </div>

                        {/* Badge Info */}
                        <div className="text-center space-y-2">
                            <h4 className="font-poppins font-semibold text-sm">
                                {achievement?.title}
                            </h4>
                            <p className="text-xs opacity-80">
                                {achievement?.description}
                            </p>

                            {achievement?.unlocked ? (
                                <div className="text-xs font-mono">
                                    Unlocked: {achievement?.unlockedDate}
                                </div>
                            ) : (
                                <div className="text-xs">
                                    Progress: {achievement?.progress}%
                                </div>
                            )}
                        </div>

                        {/* Progress Bar for Locked Achievements */}
                        {!achievement?.unlocked && achievement?.progress > 0 && (
                            <div className="mt-3">
                                <div className="w-full bg-muted rounded-full h-1">
                                    <div
                                        className="h-1 rounded-full bg-primary transition-all duration-500"
                                        style={{ width: `${achievement?.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        {/* Rarity Indicator */}
                        <div className="absolute top-2 left-2">
                            <div className={`
                px-2 py-1 rounded-full text-xs font-mono capitalize
                ${getBadgeStyle(achievement?.rarity)}
              `}>
                                {achievement?.rarity}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredAchievements?.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                    <Icon name="Award" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No achievements in this category yet.</p>
                    <p className="text-sm">Keep working out to unlock badges!</p>
                </div>
            )}
        </div>
    );
};

export default AchievementBadges;