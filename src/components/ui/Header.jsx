import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ user = null, notifications = {}, onNavigate = () => {} }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { 
      label: 'Dashboard', 
      path: '/dashboard-home', 
      icon: 'Home',
      tooltip: 'Your fitness hub'
    },
    { 
      label: 'Exercises', 
      path: '/exercise-catalog', 
      icon: 'Dumbbell',
      tooltip: 'Browse workouts'
    },
    { 
      label: 'Progress', 
      path: '/progress-tracker', 
      icon: 'TrendingUp',
      tooltip: 'Track your journey'
    },
    { 
      label: 'Admin', 
      path: '/admin-dashboard', 
      icon: 'Settings',
      adminOnly: true,
      tooltip: 'Admin panel'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Logout logic would be handled by parent component
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef?.current && !profileRef?.current?.contains(event?.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNotificationCount = (path) => {
    const counts = {
      '/dashboard-home': notifications?.dashboard || 0,
      '/progress-tracker': notifications?.progress || 0
    };
    return counts?.[path] || 0;
  };

  const isActive = (path) => location?.pathname === path;

  const visibleNavItems = navigationItems?.filter(item => 
    !item?.adminOnly || (user && user?.role === 'admin')
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-8">
          <div className="w-8 h-8 rounded-lg contextual-gradient flex items-center justify-center">
            <Icon name="Zap" size={20} color="white" />
          </div>
          <span className="font-poppins font-bold text-xl text-foreground">
            FitZone
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 flex-1">
          {visibleNavItems?.map((item) => {
            const notificationCount = getNotificationCount(item?.path);
            return (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`
                  relative flex items-center space-x-2 px-4 py-2 rounded-lg
                  font-poppins font-medium text-sm transition-all duration-200
                  hover:bg-muted micro-celebration
                  ${isActive(item?.path) 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
                title={item?.tooltip}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center breathing-animation">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile Dropdown */}
        {user && (
          <div className="relative ml-auto" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-poppins font-semibold text-sm">
                {user?.name ? user?.name?.charAt(0)?.toUpperCase() : 'U'}
              </div>
              <div className="hidden lg:block text-left">
                <div className="font-poppins font-medium text-sm text-foreground">
                  {user?.name || 'User'}
                </div>
                {user?.streak && (
                  <div className="font-mono text-xs text-muted-foreground">
                    🔥 {user?.streak} day streak
                  </div>
                )}
              </div>
              <Icon 
                name={isProfileOpen ? 'ChevronUp' : 'ChevronDown'} 
                size={16} 
                className="text-muted-foreground" 
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg morphic-card">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-poppins font-semibold">
                      {user?.name ? user?.name?.charAt(0)?.toUpperCase() : 'U'}
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-foreground">
                        {user?.name || 'User'}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user?.email || 'user@fitzone.com'}
                      </div>
                      {user?.streak && (
                        <div className="font-mono text-xs text-success mt-1">
                          🔥 {user?.streak} day streak
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">Profile Settings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200">
                    <Icon name="Bell" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">Notifications</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors duration-200">
                    <Icon name="HelpCircle" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">Help & Support</span>
                  </button>
                  <div className="border-t border-border my-2"></div>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-destructive/10 rounded-lg transition-colors duration-200 text-destructive"
                  >
                    <Icon name="LogOut" size={16} />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden ml-4 p-2 rounded-lg hover:bg-muted transition-colors duration-200"
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="p-4 space-y-2">
            {visibleNavItems?.map((item) => {
              const notificationCount = getNotificationCount(item?.path);
              return (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`
                    relative w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                    font-poppins font-medium text-sm transition-all duration-200
                    ${isActive(item?.path) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="flex-1 text-left">{item?.label}</span>
                  {notificationCount > 0 && (
                    <span className="w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                      {notificationCount > 9 ? '9+' : notificationCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;