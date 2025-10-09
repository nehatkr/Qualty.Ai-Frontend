import React, { useState, useRef, useEffect } from "react";
import { FiImage } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const progressSteps = ["Start", "Analysis", "Report", "Finish"];
const inspectors = [{ id: 1, name: "Inspector" }];

export default function LiveChat() {
  const [selectedInspector, setSelectedInspector] = useState(inspectors[0]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const currentStep = "Start";

  const sendMessage = () => {
    if (!input.trim() && !image) return;

    const newMessage = {
      sender: "customer",
      text: input,
      image: image ? URL.createObjectURL(image) : null,
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "inspector",
          text: "🚧 Live chat is coming soon! You'll be able to collaborate with inspectors in real time.",
        },
      ]);
    }, 1000);

    setInput("");
    setImage(null);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto mt-10 border border-gray-200 rounded-xl shadow-xl overflow-hidden bg-white text-black">
      
      {/* Sidebar Progress */}
      <div className="lg:w-1/3 w-full bg-gray-50 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
        <h2 className="text-xl font-bold mb-6 tracking-wide text-black">
          Inspection Progress
        </h2>
        <div className="relative">
          {progressSteps.map((step, index) => {
            const isCompleted = step === "Start";
            const isCurrent = step === currentStep;
            const isUpcoming = !isCompleted && !isCurrent;

            return (
              <div
                key={step}
                className={`flex items-center mb-8 relative ${
                  isUpcoming ? "opacity-40 blur-[1px]" : "opacity-100"
                }`}
              >
                <div className="z-10 w-4 h-4 bg-black rounded-full border-2 border-white shadow flex items-center justify-center">
                  {isCompleted && (
                    <FaCheckCircle className="text-green-500 text-[14px]" />
                  )}
                </div>
                <div className="ml-4 font-medium text-black">{step}</div>
                {index < progressSteps.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-8 bg-gray-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Section */}
      <div className="lg:w-2/3 w-full flex flex-col justify-between">
        {/* Chat Messages */}
        <div className="flex-1 overflow-hidden">
          <div className="p-6 space-y-3 h-[400px] overflow-y-auto bg-white">
            <h2 className="text-xl font-bold text-black mb-4">
              💬 Chat with {selectedInspector.name}
            </h2>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "customer"
                    ? "bg-black text-white self-end ml-auto"
                    : "bg-gray-100 text-black self-start mr-auto"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="uploaded"
                    className="mt-2 rounded max-w-full h-auto"
                  />
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Input Section */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-white border outline-none border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-black cursor-pointer text-white rounded hover:bg-gray-900 transition"
            >
              Send
            </button>
            <button
              onClick={() => fileInputRef.current.click()}
              className="p-2 bg-gray-200 cursor-pointer text-black rounded hover:bg-gray-300 transition"
              title="Attach Image"
            >
              <FiImage size={20} />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </div>
          {image && (
            <p className="text-xs text-gray-500 mt-1">Selected: {image.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}
