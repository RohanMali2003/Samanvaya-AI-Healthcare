import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sampleMessages = [
  {
    role: "assistant",
    content: "Hello! I'm your health assistant. How can I help you today?",
  },
  {
    role: "user",
    content: "What are the symptoms of dehydration?",
  },
  {
    role: "assistant",
    content: "Common symptoms of dehydration include: thirst, dark urine, fatigue, dizziness, and dry mouth. Make sure to drink plenty of water throughout the day.",
  },
];

export const AIAssistant = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-dark-500/50 bg-dark-300">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-dark-500/50 bg-dark-400 p-8">
        <Image
          src="/assets/icons/ai-assistant.svg"
          alt="AI Assistant"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <h3 className="text-16-medium">Health Assistant</h3>
          <p className="text-12-regular text-dark-600">Always here to help</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-8">
        {sampleMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === "user"
                  ? "bg-green-500 text-white"
                  : "bg-dark-400"
              }`}
            >
              <p className="text-14-regular">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-dark-500/50 bg-dark-400 p-8">
        <form
          className="flex gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setMessage("");
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-dark-500/50 bg-dark-300 px-4 py-3 text-14-regular focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Button 
            type="submit"
            className="bg-green-500 hover:bg-green-600"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}; 