"use client";

import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import IconButton from "../../components/ui/IconButton";
import CreateBotModal from "../../components/ui/CreateBotModal";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateBot = (botName: string, isPublic: boolean) => {
    // TODO: Implement bot creation logic
    console.log("Creating bot:", { name: botName, isPublic });
    // For now, just show an alert
    alert(
      `Bot "${botName}" created successfully! (${
        isPublic ? "Public" : "Private"
      })`
    );
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
        <div className="flex-1 p-6">
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

          {/* Create New Bot Card */}
          <div className="mb-8">
            <Card
              className="p-6 border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors cursor-pointer max-w-md"
              onClick={() => setIsCreateModalOpen(true)}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-2xl">+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Create New Bot
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Start building your first AI chatbot
                </p>
              </div>
            </Card>
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
