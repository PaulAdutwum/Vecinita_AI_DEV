"use client";

import React, { useState } from "react";
import Button from "./Button";
import IconButton from "./IconButton";

interface CreateBotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBot: (botName: string, isPublic: boolean) => void;
}

export default function CreateBotModal({
  isOpen,
  onClose,
  onCreateBot,
}: CreateBotModalProps) {
  const [botName, setBotName] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botName.trim()) {
      onCreateBot(botName.trim(), isPublic);
      setBotName("");
      setIsPublic(false);
      onClose();
    }
  };

  const handleClose = () => {
    setBotName("");
    setIsPublic(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create New Bot</h2>
          <IconButton
            onClick={handleClose}
            variant="ghost"
            size="md"
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Instruction */}
          <p className="text-gray-600 text-sm">
            Give your chatbot a name to easily identify it
          </p>

          {/* Bot Name Input */}
          <div>
            <input
              type="text"
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              placeholder="Enter your new bot name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
              required
              autoFocus
            />
          </div>

          {/* Public Toggle */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setIsPublic(!isPublic)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isPublic ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isPublic ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm text-gray-600">
              Make it public (You can change this later)
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={handleClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              type="submit"
              variant="gradient"
              className="flex-1"
              disabled={!botName.trim()}
            >
              Let&apos;s Go!
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}





