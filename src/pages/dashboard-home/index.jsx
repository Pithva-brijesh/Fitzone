import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Zap, Target } from 'lucide-react';
import Header from '../../components/ui/Header';
import PersonalizedGreeting from './components/PersonalizedGreeting';
import QuickStatsCard from './components/QuickStatsCard';
import TrendingContentCard from './components/TrendingContentCard';
import RecentAchievements from './components/RecentAchievements';
import UpcomingChallenges from './components/UpcomingChallenges';
import QuickActions from './components/QuickActions';
import PersonalBadges from './components/PersonalBadges';

const DashboardHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user data
  const mockUser = {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@fitzone.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    streak: 12,
    level: 8,
    role: "user",
    stats: {
      workouts: 45,
      points: 2840
    },
    unreadNotifications: 3
  };

  // Mock motivational quote
  const motivationalQuote = {
    text: "Your fitness journey is a marathon, not a sprint. Every step counts!",
    author: "FitGuide Coaches"
  };

  // Mock quick stats
  const quickStats = {
    weeklyWorkouts: 4,
    weeklyTarget: 5,
    totalMinutes: 240,
    minutesTarget: 300,
    caloriesBurned: 1850,
    caloriesTarget: 2000,
    level: 8
  };

  // Mock trending content
  const trendingContent = [
  {
    id: 1,
    type: 'exercise',
    title: 'High-Intensity Interval Training',
    description: 'Burn calories fast with this 20-minute HIIT workout designed for maximum fat loss and cardiovascular improvement.',
    image: "https://images.unsplash.com/photo-1537240011413-6de3ffe23e9d",
    imageAlt: 'Athletic woman in black sports bra doing high-intensity interval training in modern gym',
    likes: 1240,
    views: 8500,
    difficulty: 3,
    author: 'Sarah Martinez',
    isNew: true
  },
  {
    id: 2,
    type: 'community',
    title: 'Weekly Challenge: 10K Steps Daily',
    description: 'Join 2,500+ members in our community challenge to walk 10,000 steps every day this week.',
    image: "https://images.unsplash.com/photo-1727782384845-d0483e295e84",
    imageAlt: 'Group of diverse people walking together on outdoor trail during sunrise',
    likes: 890,
    comments: 156,
    views: 3200,
    author: 'FitZone Community'
  },
  {
    id: 3,
    type: 'article',
    title: 'Nutrition Guide for Muscle Building',
    description: 'Complete guide to eating for muscle growth, including meal plans, protein requirements, and timing strategies.',
    image: "https://images.unsplash.com/photo-1617375335084-ea498986e026",
    imageAlt: 'Colorful healthy meal with grilled chicken, quinoa, and fresh vegetables on white plate',
    views: 5600,
    likes: 420,
    author: 'Dr. Michael Chen'
  },
  {
    id: 4,
    type: 'exercise',
    title: 'Beginner Yoga Flow',
    description: 'Gentle 15-minute yoga sequence perfect for beginners to improve flexibility and reduce stress.',
    image: "https://images.unsplash.com/photo-1701826510707-fbaf4675bc32",
    imageAlt: 'Woman in white yoga outfit performing downward dog pose on purple yoga mat in bright studio',
    likes: 680,
    views: 2100,
    difficulty: 1,
    author: 'Emma Wilson'
  },
  {
    id: 5,
    type: 'community',
    title: 'Transformation Tuesday Success Stories',
    description: 'Amazing before and after photos from our community members who achieved their fitness goals.',
    image: "https://images.unsplash.com/photo-1650322001352-82d74350f8f3",
    imageAlt: 'Before and after fitness transformation photos showing muscular man flexing in gym mirror',
    likes: 2100,
    comments: 340,
    views: 12000,
    author: 'Community Spotlight'
  },
  {
    id: 6,
    type: 'exercise',
    title: 'Upper Body Strength Circuit',
    description: 'Build upper body strength with this comprehensive circuit targeting chest, back, shoulders, and arms.',
    image: "https://images.unsplash.com/photo-1704375058325-e51b6382a95d",
    imageAlt: 'Muscular man performing pull-ups on outdoor fitness equipment against blue sky',
    likes: 950,
    views: 4200,
    difficulty: 2,
    author: 'Jake Thompson'
  }];


  // Mock recent achievements
  const recentAchievements = [
  {
    id: 1,
    title: '12-Day Streak Master',
    description: 'Completed workouts for 12 consecutive days',
    type: 'streak',
    points: 120,
    earnedAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    id: 2,
    title: 'HIIT Hero',
    description: 'Completed 10 HIIT workouts',
    type: 'workout',
    points: 100,
    earnedAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  },
  {
    id: 3,
    title: 'Level Up!',
    description: 'Reached fitness level 8',
    type: 'level',
    points: 200,
    earnedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
  },
  {
    id: 4,
    title: 'Community Helper',
    description: 'Helped 5 community members',
    type: 'social',
    points: 50,
    earnedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
  }];


  // Mock upcoming challenges
  const upcomingChallenges = [
  {
    id: 1,
    title: '30-Day Plank Challenge',
    description: 'Build core strength with progressive plank holds',
    currentProgress: 18,
    target: 30,
    unit: 'days',
    difficulty: 'intermediate',
    endDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
    participants: 3420,
    reward: '500 pts'
  },
  {
    id: 2,
    title: 'Weekly Cardio Goal',
    description: 'Complete 150 minutes of cardio this week',
    currentProgress: 90,
    target: 150,
    unit: 'minutes',
    difficulty: 'beginner',
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    participants: 1850,
    reward: '200 pts'
  },
  {
    id: 3,
    title: 'Strength Training Streak',
    description: 'Complete strength workouts 4 times this week',
    currentProgress: 2,
    target: 4,
    unit: 'workouts',
    difficulty: 'advanced',
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
    participants: 920,
    reward: '300 pts'
  }];


  // Mock personal badges
  const personalBadges = [
  {
    id: 1,
    name: 'Streak Master',
    description: '10+ day workout streak',
    category: 'streak',
    rarity: 'rare'
  },
  {
    id: 2,
    name: 'HIIT Champion',
    description: 'Completed 25 HIIT workouts',
    category: 'fitness',
    rarity: 'epic'
  },
  {
    id: 3,
    name: 'Community Star',
    description: 'Helped 10+ members',
    category: 'social',
    rarity: 'rare'
  },
  {
    id: 4,
    name: 'Early Bird',
    description: 'Completed 20 morning workouts',
    category: 'achievement',
    rarity: 'common'
  },
  {
    id: 5,
    name: 'Goal Crusher',
    description: 'Achieved 5 fitness goals',
    category: 'milestone',
    rarity: 'legendary'
  },
  {
    id: 6,
    name: 'Cardio King',
    description: 'Burned 10,000+ calories',
    category: 'fitness',
    rarity: 'epic'
  }];


  // Mock current goals
  const currentGoals = [
  {
    id: 1,
    title: 'Lose 10 pounds',
    description: 'Target weight loss by end of month',
    type: 'weight',
    current: 6,
    target: 10,
    unit: 'lbs',
    deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days from now
  },
  {
    id: 2,
    title: 'Run 5K under 25 minutes',
    description: 'Improve running speed and endurance',
    type: 'cardio',
    current: 27,
    target: 25,
    unit: 'minutes',
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  },
  {
    id: 3,
    title: 'Bench Press Body Weight',
    description: 'Increase upper body strength',
    type: 'strength',
    current: 140,
    target: 160,
    unit: 'lbs',
    deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000) // 45 days from now
  }];


  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setUser(mockUser);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuickStart = (type) => {
    if (type === 'workout') {
      navigate('/exercise-catalog');
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          {/* FitGuide Loading Animation */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full glass-effect flex items-center justify-center mx-auto pulse-animation">
              <div className="flex items-center space-x-2">
                <Star className="w-8 h-8 text-secondary neon-glow" fill="currentColor" />
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto">
              <div className="animate-spin rounded-full h-24 w-24 border-2 border-primary/30 border-t-secondary"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="font-poppins font-bold text-2xl">
              <span className="text-gradient">FitGuide</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Preparing your personalized fitness hub...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        user={user}
        notifications={{
          dashboard: 2,
          progress: 1
        }}
        onNavigate={handleNavigation}
      />
      {/* Hero Section with FitGuide Branding */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="text-center space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 rounded-2xl glass-effect">
                <Star className="w-8 h-8 text-secondary neon-glow" fill="currentColor" />
              </div>
              <h1 className="font-poppins font-black text-4xl lg:text-5xl">
                <span className="text-gradient">Fit</span>
                <span className="text-foreground">Guide</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your personal AI-powered fitness companion for a healthier, stronger you
            </p>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 pb-8 space-y-8">
        {/* Personalized Greeting */}
        <PersonalizedGreeting
          user={user}
          streak={user?.streak}
          motivationalQuote={motivationalQuote}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <QuickStatsCard stats={quickStats} />

            {/* What's Your Type Section */}
            <div className="fitguide-card p-6 space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/20">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-poppins font-bold text-xl text-foreground">
                  What's Your Type?
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { type: 'Cardio', icon: '🏃', color: 'from-primary to-neon-blue' },
                  { type: 'Strength', icon: '💪', color: 'from-accent to-neon-purple' },
                  { type: 'Yoga', icon: '🧘', color: 'from-success to-primary' },
                  { type: 'HIIT', icon: '⚡', color: 'from-secondary to-warning' }
                ]?.map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer p-4 rounded-2xl glass-effect hover:scale-105 transition-all duration-300 neon-border"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-3xl mb-2">{item?.icon}</div>
                      <div className={`text-sm font-poppins font-semibold bg-gradient-to-r ${item?.color} bg-clip-text text-transparent`}>
                        {item?.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Content */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-poppins font-bold text-2xl text-foreground">
                  Trending Now
                </h2>
                <div className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200 cursor-pointer">
                  <span className="text-sm font-poppins font-medium">View All</span>
                  <Zap className="w-4 h-4" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trendingContent?.slice(0, 4)?.map((content) => (
                  <TrendingContentCard
                    key={content?.id}
                    content={content}
                    type={content?.type}
                  />
                ))}
              </div>
              
              {/* Show more trending content on mobile */}
              <div className="md:hidden grid grid-cols-1 gap-6">
                {trendingContent?.slice(4)?.map((content) => (
                  <TrendingContentCard
                    key={content?.id}
                    content={content}
                    type={content?.type}
                  />
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <RecentAchievements achievements={recentAchievements} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <QuickActions
              user={user}
              onQuickStart={handleQuickStart}
            />

            {/* Progress Ring */}
            <div className="fitguide-card p-6 text-center space-y-4">
              <h3 className="font-poppins font-bold text-lg text-foreground">
                Weekly Goal
              </h3>
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="rgba(79, 70, 229, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#progress-gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(quickStats?.weeklyWorkouts / quickStats?.weeklyTarget) * 314} 314`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="50%" stopColor="#ffff00" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-poppins font-bold text-gradient">
                      {quickStats?.weeklyWorkouts}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      of {quickStats?.weeklyTarget}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Keep pushing! You're doing great! 🔥
              </p>
            </div>

            {/* Upcoming Challenges */}
            <UpcomingChallenges challenges={upcomingChallenges} />

            {/* Personal Badges & Goals */}
            <PersonalBadges
              badges={personalBadges}
              currentGoals={currentGoals}
            />
          </div>
        </div>

        {/* Additional Trending Content for Desktop */}
        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-poppins font-bold text-2xl text-foreground">
                More Amazing Content
              </h2>
              <button
                onClick={() => navigate('/exercise-catalog')}
                className="btn-secondary-neon"
              >
                Explore All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingContent?.slice(4)?.map((content) => (
                <TrendingContentCard
                  key={content?.id}
                  content={content}
                  type={content?.type}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;