"use client";
import { ReactNode, useState } from "react";
import {
  BellIcon,
  TrophyIcon,
  AcademicCapIcon,
  UsersIcon,
  
  SparklesIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 shadow-2xl p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            WSCube
          </h1>
        </div>
        <nav className="space-y-2">
          <button
            onClick={toggleMenu}
            className=" lg:hidden text-gray-400 hover:text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <NavItem
            href={"/learning"}
            icon={<AcademicCapIcon className="h-6 w-6" />}
            label="Learning Path"
          />
          <NavItem
            href={"/leaderboard"}
            icon={<TrophyIcon className="h-6 w-6" />}
            label="Leaderboard"
          />
          <NavItem
            href={"/badges"}
            icon={<SparklesIcon className="h-6 w-6" />}
            label="Badges"
          />
          <NavItem
            href={"/collaboration"}
            icon={<UsersIcon className="h-6 w-6" />}
            label="Collaboration"
          />
           <NavItem
            href={"/reward"}
            icon={<UsersIcon className="h-6 w-6" />}
            label="Reward"
          />
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="mt-16 bg-gradient-to-r from-blue-600 to-red-600/80 backdrop-blur-lg border-b border-gray-700 shadow-xl p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-3 bg-gray-700 hover:bg-purple-500/20 rounded-full shadow transition-all border border-gray-600 hover:border-purple-400 lg:hidden"
            >
              <Bars3Icon className="h-6 w-6 text-purple-300" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-100 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                SD
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 animate-shimmer" />
              </div>
              <div>
                <p className="font-semibold text-gray-200">Saad Mehmood</p>
                <p className="text-xs text-purple-300/80">Level 4 - 450 XP</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-3 bg-gray-700 hover:bg-purple-500/20 rounded-full shadow transition-all border border-gray-600 hover:border-purple-400">
              <BellIcon className="h-6 w-6 text-purple-300" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 space-y-6 bg-black">
          {children}
        </main>
      </div>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-purple-900/20 via-transparent to-pink-900/20 opacity-20" />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  href,
}: {
  icon: ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <button className="w-full flex items-center space-x-4 p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 group relative">
        <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 rounded-xl transition-all" />
        <span className="text-purple-400 group-hover:text-purple-300 transition-all">
          {icon}
        </span>
        <span className="font-medium text-gray-300 group-hover:text-gray-100">
          {label}
        </span>
      </button>
    </Link>
  );
}
