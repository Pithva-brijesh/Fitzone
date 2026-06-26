import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const FilterControls = ({
  searchQuery = '',
  onSearchChange = () => {},
  sortBy = 'name',
  onSortChange = () => {},
  difficultyFilter = 'all',
  onDifficultyChange = () => {},
  equipmentFilter = 'all',
  onEquipmentChange = () => {},
  durationFilter = 'all',
  onDurationChange = () => {},
  onClearFilters = () => {},
  resultCount = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'difficulty', label: 'Difficulty' },
    { value: 'duration', label: 'Duration' },
    { value: 'rating', label: 'Rating' },
    { value: 'popularity', label: 'Most Popular' }
  ];

  const difficultyOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const equipmentOptions = [
    { value: 'all', label: 'Any Equipment' },
    { value: 'None', label: 'No Equipment' },
    { value: 'Dumbbells', label: 'Dumbbells' },
    { value: 'Resistance Bands', label: 'Resistance Bands' },
    { value: 'Yoga Mat', label: 'Yoga Mat' },
    { value: 'Pull-up Bar', label: 'Pull-up Bar' },
    { value: 'Kettlebell', label: 'Kettlebell' }
  ];

  const durationOptions = [
    { value: 'all', label: 'Any Duration' },
    { value: 'short', label: 'Under 15 min' },
    { value: 'medium', label: '15-30 min' },
    { value: 'long', label: '30+ min' }
  ];

  const hasActiveFilters = difficultyFilter !== 'all' || 
                          equipmentFilter !== 'all' || 
                          durationFilter !== 'all' || 
                          searchQuery?.length > 0;

  return (
    <div className="w-full space-y-4">
      {/* Search and Sort Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            placeholder="Sort by"
            className="w-40"
          />
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg
              font-poppins font-medium text-sm transition-all duration-200
              micro-celebration
              ${isExpanded 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }
            `}
          >
            <Icon name="Filter" size={16} />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-accent rounded-full"></span>
            )}
          </button>
        </div>
      </div>
      {/* Expanded Filters */}
      {isExpanded && (
        <div className="morphic-card bg-card border border-border rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-semibold text-foreground">
              Filter Options
            </h3>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Difficulty Level"
              options={difficultyOptions}
              value={difficultyFilter}
              onChange={onDifficultyChange}
            />
            
            <Select
              label="Equipment Needed"
              options={equipmentOptions}
              value={equipmentFilter}
              onChange={onEquipmentChange}
            />
            
            <Select
              label="Duration"
              options={durationOptions}
              value={durationFilter}
              onChange={onDurationChange}
            />
          </div>
        </div>
      )}
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {resultCount} exercise{resultCount !== 1 ? 's' : ''} found
          {hasActiveFilters && (
            <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs">
              Filtered
            </span>
          )}
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={() => setIsExpanded(false)}
            className="lg:hidden text-sm text-muted-foreground hover:text-foreground"
          >
            Hide Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterControls;