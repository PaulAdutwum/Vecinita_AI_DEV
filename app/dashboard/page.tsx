"use client";

import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import IconButton from "../../components/ui/IconButton";
import CreateBotModal from "../../components/ui/CreateBotModal";

// Sample bot data - will be replaced with real data from backend
interface Bot {
  id: string;
  name: string;
  status: "active" | "inactive";
  messages: number;
  lastActive: string;
  isPublic: boolean;
}

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  // Sample bots - this will come from your database later
  const [bots, setBots] = useState<Bot[]>([
    {
      id: "1",
      name: "Rhode Island Helper",
      status: "active",
      messages: 1234,
      lastActive: "2 hours ago",
      isPublic: true,
    },
    {
      id: "2",
      name: "Neighborhood Assistant",
      status: "active",
      messages: 856,
      lastActive: "5 hours ago",
      isPublic: false,
    },
  ]);

  // User stats
  const userStats = {
    totalBots: bots.length,
    totalMessages: bots.reduce((sum, bot) => sum + bot.messages, 0),
    activeBots: bots.filter((bot) => bot.status === "active").length,
    planType: "Pro",
  };

  const handleCreateBot = (botName: string, isPublic: boolean) => {
    // Create new bot and add to list
    const newBot: Bot = {
      id: Date.now().toString(),
      name: botName,
      status: "active",
      messages: 0,
      lastActive: "Just now",
      isPublic: isPublic,
    };
    
    setBots([...bots, newBot]);
    console.log("Creating bot:", { name: botName, isPublic });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-blue-900 flex flex-col items-center py-6 space-y-6">
        {/* Bot Icon */}
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors">
          <span className="text-white text-lg">🤖</span>
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-blue-900"></div>
        </div>

        {/* Add New Bot */}
        <div
          className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <span className="text-white text-xl">+</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Home
            </a>
            <h1 className="text-2xl font-bold text-gray-900">My Bots List</h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <IconButton variant="ghost" size="md">
              <span className="text-gray-600">🔔</span>
            </IconButton>

            {/* Profile Dropdown */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <span className="text-gray-600">▼</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Bots */}
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Bots</p>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {userStats.totalBots}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
              </div>
            </Card>

            {/* Active Bots */}
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Bots</p>
                  <h3 className="text-3xl font-bold text-green-600">
                    {userStats.activeBots}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
              </div>
            </Card>

            {/* Total Messages */}
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Messages</p>
                  <h3 className="text-3xl font-bold text-purple-600">
                    {userStats.totalMessages.toLocaleString()}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
            </Card>

            {/* Plan Type */}
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Plan</p>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {userStats.planType}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for bots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bots Section */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Your AI Chatbots
            </h2>

            {/* Grid of Bots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Create New Bot Card */}
              <Card
                className="p-6 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors cursor-pointer"
                onClick={() => setIsCreateModalOpen(true)}
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-3xl">+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Create New Bot
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Start building your AI chatbot
                  </p>
                </div>
              </Card>

              {/* Existing Bots */}
              {bots
                .filter((bot) =>
                  bot.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((bot) => (
                  <Card
                    key={bot.id}
                    className="p-6 cursor-pointer hover:border-blue-400"
                  >
                    <div className="flex flex-col h-full">
                      {/* Bot Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">🤖</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">
                              {bot.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span
                                className={`inline-block w-2 h-2 rounded-full ${
                                  bot.status === "active"
                                    ? "bg-green-500"
                                    : "bg-gray-400"
                                }`}
                              ></span>
                              <span className="text-xs text-gray-600">
                                {bot.status === "active" ? "Active" : "Inactive"}
                              </span>
                            </div>
                          </div>
                        </div>
                        {bot.isPublic && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            Public
                          </span>
                        )}
                      </div>

                      {/* Bot Stats */}
                      <div className="flex-1">
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center justify-between">
                            <span>Messages:</span>
                            <span className="font-semibold text-gray-900">
                              {bot.messages.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Last Active:</span>
                            <span className="font-semibold text-gray-900">
                              {bot.lastActive}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bot Actions */}
                      <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1 text-sm"
                        >
                          Configure
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="flex-1 text-sm"
                        >
                          View Stats
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Feedback Tab */}
      <div className="w-12 bg-blue-900 flex items-center justify-center">
        <div className="transform -rotate-90 text-white font-medium text-sm cursor-pointer hover:text-blue-200 transition-colors">
          Feedback
        </div>
      </div>

      {/* Create Bot Modal */}
      <CreateBotModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateBot={handleCreateBot}
      />
    </div>
  );
}
