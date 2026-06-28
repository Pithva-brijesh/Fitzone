import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExportProgress = ({ onExport }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const exportFormats = [
    { id: 'pdf', label: 'PDF Report', icon: 'FileText', description: 'Comprehensive visual report' },
    { id: 'csv', label: 'CSV Data', icon: 'Database', description: 'Raw data for analysis' },
    { id: 'json', label: 'JSON Export', icon: 'Code', description: 'Developer-friendly format' }
  ];

  const timeframes = [
    { id: 'week', label: 'Last Week', icon: 'Calendar' },
    { id: 'month', label: 'Last Month', icon: 'CalendarDays' },
    { id: 'quarter', label: 'Last 3 Months', icon: 'CalendarRange' },
    { id: 'year', label: 'Last Year', icon: 'CalendarX2' },
    { id: 'all', label: 'All Time', icon: 'Infinity' }
  ];

  const handleExport = async () => {
    setIsExporting(true);
    
    try {
      // Simulate export process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (onExport) {
        onExport({
          format: selectedFormat,
          timeframe: selectedTimeframe,
          timestamp: new Date()?.toISOString()
        });
      }
      
      // Show success message (in real app, this would trigger a download)
      alert(`Progress report exported successfully as ${selectedFormat?.toUpperCase()}!`);
    } catch (error) {
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="morphic-card bg-card p-6 border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon name="Download" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-lg text-foreground">
            Export Progress Data
          </h3>
          <p className="text-sm text-muted-foreground">
            Download your fitness journey data for personal records or trainer consultations
          </p>
        </div>
      </div>
      {/* Export Format Selection */}
      <div className="space-y-4 mb-6">
        <h4 className="font-poppins font-medium text-foreground">Export Format</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {exportFormats?.map((format) => (
            <button
              key={format?.id}
              onClick={() => setSelectedFormat(format?.id)}
              className={`
                p-4 rounded-lg border-2 text-left transition-all duration-200 micro-celebration
                ${selectedFormat === format?.id 
                  ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-muted-foreground'
                }
              `}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={format?.icon} size={20} />
                <span className="font-poppins font-medium">{format?.label}</span>
              </div>
              <p className="text-xs opacity-80">{format?.description}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Timeframe Selection */}
      <div className="space-y-4 mb-6">
        <h4 className="font-poppins font-medium text-foreground">Time Period</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {timeframes?.map((timeframe) => (
            <button
              key={timeframe?.id}
              onClick={() => setSelectedTimeframe(timeframe?.id)}
              className={`
                flex items-center space-x-2 p-3 rounded-lg text-sm font-poppins font-medium
                transition-all duration-200 micro-celebration
                ${selectedTimeframe === timeframe?.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }
              `}
            >
              <Icon name={timeframe?.icon} size={16} />
              <span>{timeframe?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Export Preview */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <h4 className="font-poppins font-medium text-foreground mb-3">Export Preview</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Format:</span>
            <span className="font-mono">{selectedFormat?.toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span>Time Period:</span>
            <span>{timeframes?.find(t => t?.id === selectedTimeframe)?.label}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Size:</span>
            <span className="font-mono">
              {selectedFormat === 'pdf' ? '2.5 MB' : selectedFormat === 'csv' ? '150 KB' : '85 KB'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Generated:</span>
            <span>{new Date()?.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      {/* Export Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="default"
          onClick={handleExport}
          loading={isExporting}
          iconName="Download"
          iconPosition="left"
          className="flex-1"
          disabled={isExporting}
        >
          {isExporting ? 'Generating Export...' : 'Export Progress Data'}
        </Button>
        
        <Button
          variant="outline"
          iconName="Share"
          iconPosition="left"
          className="sm:w-auto"
        >
          Share Report
        </Button>
      </div>
      {/* Export Info */}
      <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Info" size={16} className="text-primary mt-0.5" />
          <div className="text-sm text-primary">
            <p className="font-medium mb-1">Privacy Notice</p>
            <p className="text-xs opacity-80">
              Your exported data includes personal metrics and progress information. 
              Keep your reports secure and only share with trusted fitness professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportProgress;