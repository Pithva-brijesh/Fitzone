import PersonalizedGreeting from "./components/PersonalizedGreeting";
import QuickStatsCard from "./components/QuickStatsCard";

function DashboardHome() {
  const user = {
    name: "Alex Johnson",
    level: 8,
  };

  const quote = {
    text: "Your fitness journey is a marathon, not a sprint. Every step counts!",
    author: "FitGuide Coaches",
  };

  const stats = {
    weeklyWorkouts: 4,
    weeklyTarget: 5,
    totalMinutes: 240,
    minutesTarget: 300,
    caloriesBurned: 1800,
    caloriesTarget: 2000,
    level: 8,
  };

  return (
    <div className="p-6 space-y-6">
      <PersonalizedGreeting
        user={user}
        streak={12}
        motivationalQuote={quote}
      />

      <QuickStatsCard stats={stats} />
    </div>
  );
}

export default DashboardHome;