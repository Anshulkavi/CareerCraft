// import React, { useState, useRef } from "react";
// import { Send } from "lucide-react";

// export default function AIChatBox({ messages, input, setInput, handleSendMessage }) {
//   return (
//     <div className="md:col-span-1">
//       <div className="bg-white rounded-lg shadow-sm h-full">
//         <div className="p-4 flex flex-col h-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="font-bold text-lg">AI Assistant</h2>
//             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//               Online
//             </span>
//           </div>
//           <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-300px)]">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.role === "assistant"
//                     ? "justify-start"
//                     : "justify-end"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-lg p-3 ${
//                     message.role === "assistant"
//                       ? "bg-gray-100 text-gray-800"
//                       : "bg-green-500 text-white"
//                   }`}
//                 >
//                   {message.content}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-2">
//             <input
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               placeholder="Ask for help with your resume..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//             />
//             <button
//               className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
//               onClick={handleSendMessage}
//             >
//               <Send className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

export default function AIChatBox({
  messages,
  input,
  setInput,
  handleSendMessage,
  isLoading,
}) {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSend = () => {
    if (input.trim() === "") return;
    handleSendMessage();
  };

  return (
    <div className="md:col-span-1 w-full md:max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-sm h-full flex flex-col">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">AI Assistant</h2>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Online
            </span>
          </div>

          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-300px)] pr-1">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "assistant"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-600 rounded-lg px-3 py-2 text-sm animate-pulse">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2 mt-auto">
            <input
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Ask for help with your resume..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
            />
            <button
              className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
              onClick={onSend}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
