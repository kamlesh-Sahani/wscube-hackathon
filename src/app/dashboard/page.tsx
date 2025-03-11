"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard-components/DashboardLayout";
import ProgressBar from "@/components/dashboard-components/ProgressBar";
import LeaderboardTable from "@/components/dashboard-components/LeaderboardTable";
import BadgeGrid from "@/components/dashboard-components/BadgeGrid";
import RewardCard from "@/components/dashboard-components/Reward";
import StatCard from "@/components/dashboard-components/StatCard";
import RecommendationCard from "../../components/dashboard-components/RecommandationCard";

const initialRewards = [
  {
    id: 1,
    name: "Premium Course Access",
    cost: 2000,
    description: "Unlock all premium content for 1 month",
  },
  {
    id: 2,
    name: "Mentor Session",
    cost: 1500,
    description: "30-minute 1:1 session with an expert",
  },
  {
    id: 3,
    name: "Certificate Upgrade",
    cost: 1000,
    description: "Get a verified digital certificate",
  },
];
export default function Dashboard() {
  const [points, setPoints] = useState(3200);
  const [redeemedRewards, setRedeemedRewards] = useState<number[]>([]);
  const handleRedeem = (rewardId: number, cost: number) => {
    if (points >= cost) {
      setPoints((prev) => prev - cost);
      setRedeemedRewards((prev) => [...prev, rewardId]);
    }
  };
  return (
    <DashboardLayout>
      <div className="min-h-screen p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <GradientCard
              gradient="from-blue-600 to-purple-600"
              title="🚀 Your Learning Journey"
            >
              <div className="space-y-6">
                <div className="flex items-center max-md:items-start max-md:flex-col max-md:gap-2 justify-between">
                  <span className="text-lg font-semibold text-purple-700">
                    Points Balance: {points} XP
                  </span>
                  <ProgressBar progress={(points % 5000) / 50} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <StatCard label="🔥 Current Streak" value="7 days" />
                  <StatCard label="💎 Weekly XP" value="+850" />
                  <StatCard label="📚 Completed Modules" value="15" />
                  <StatCard label="🏆 Total Points" value="1250" />
                </div>
              </div>
            </GradientCard>
            <GradientCard
              gradient="from-yellow-600 to-orange-600"
              title="🤖 AI Recommendations"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RecommendationCard
                  title="Advanced OOP Concepts"
                  difficulty="Intermediate"
                  xp={150}
                />
                <RecommendationCard
                  title="Functions 101 Practice"
                  difficulty="Beginner"
                  xp={80}
                />

                <RecommendationCard
                  title="Object-Oriented Programming Mastery"
                  difficulty="Intermediate"
                  xp={200}
                />
                <RecommendationCard
                  title="Python Fundamentals Crash Course"
                  difficulty="Beginner"
                  xp={100}
                />
                <RecommendationCard
                  title="Advanced Algorithm Design"
                  difficulty="Advanced"
                  xp={300}
                />
                <RecommendationCard
                  title="Web Development Basics (HTML/CSS)"
                  difficulty="Beginner"
                  xp={120}
                />
              </div>
            </GradientCard>
          </div>
          <div className="space-y-8">
            <GradientCard
              gradient="from-green-600 to-teal-600"
              title="🎁 Rewards Marketplace"
            >
              <div className="space-y-4">
                {initialRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    {...reward}
                    isRedeemed={redeemedRewards.includes(reward.id)}
                    onRedeem={() => handleRedeem(reward.id, reward.cost)}
                    points={points}
                  />
                ))}
              </div>
            </GradientCard>
            <GradientCard
              gradient="from-pink-600 to-red-600"
              title="🏆 Leaderboard"
            >
              <LeaderboardTable />
            </GradientCard>
          </div>
        </div>
        <div className="mt-12">
          <GradientCard
            gradient="from-blue-600 to-purple-600"
            title="🥇 Recent Badges"
          >
            <BadgeGrid />
          </GradientCard>
        </div>
      </div>
    </DashboardLayout>
  );
}

const GradientCard = ({
  gradient,
  title,
  children,
}: {
  gradient: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className={`p-[2px] rounded-3xl bg-gradient-to-r ${gradient} shadow-lg hover:shadow-2xl transition-all duration-300`}
  >
    <div className="rounded-[calc(1.5rem-2px)] bg-white p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
  </div>
);
