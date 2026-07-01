import React from "react";
import Icon from "../../../components/AppIcon";

export default function Leaderboard() {
  const leaders = [
    {
      rank: 1,
      name: "Alex Johnson",
      level: 15,
      xp: 18420,
      streak: 42,
    },
    {
      rank: 2,
      name: "Emma Wilson",
      level: 14,
      xp: 17310,
      streak: 38,
    },
    {
      rank: 3,
      name: "Michael Brown",
      level: 13,
      xp: 16540,
      streak: 35,
    },
    {
      rank: 24,
      name: "You",
      level: 8,
      xp: 8420,
      streak: 18,
    },
  ];

  return (
    <div className="morphic-card bg-card border border-border rounded-3xl p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-foreground">
            Leaderboard
          </h2>

          <p className="text-muted-foreground">
            Compare your progress with other athletes.
          </p>

        </div>

        <Icon
          name="Trophy"
          size={30}
          className="text-warning"
        />

      </div>

      {/* Leaderboard */}

      <div className="space-y-5">

        {leaders.map((leader) => (

          <div
            key={leader.rank}
            className={`rounded-2xl p-5 flex justify-between items-center ${
              leader.name === "You"
                ? "bg-primary/10 border border-primary"
                : "bg-background"
            }`}
          >

            <div className="flex items-center gap-5">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">

                <span className="font-bold text-primary">

                  #{leader.rank}

                </span>

              </div>

              <div>

                <h3 className="font-bold text-foreground">
                  {leader.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Level {leader.level}
                </p>

              </div>

            </div>

            <div className="text-right">

              <div className="font-bold text-warning">
                {leader.xp.toLocaleString()} XP
              </div>

              <div className="text-sm text-muted-foreground">
                🔥 {leader.streak} Day Streak
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}