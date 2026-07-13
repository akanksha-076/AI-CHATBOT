import { useState, useRef, useEffect } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am your AI assistant running on Gemini. Ask me anything!",
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const feedEndRef = useRef(null);

  // Automatically scroll the view context down to the latest message bubble
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { text: userText, sender: "user" }]);
    setInput("");
    setIsTyping(true); // Trigger loading animation module status

    try {
      const response = await fetch("http://ai-chatbot-mktf.onrender.com/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Communication error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error establishing server link context.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false); // Disable loading animation
    }
  };

  // Allow firing requests seamlessly by pressing the Enter key inside the field
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div class="app-container">
      {/* Visual Header Block */}
      <header class="chat-header">
        <div class="avatar">G</div>
        <div class="header-status">
          <h3>Gemini Engine Core</h3>
          <div class="status-indicator">
            <span class="status-dot"></span> Online Gateway
          </div>
        </div>
      </header>

      {/* Main Conversation Box */}
      <div class="chat-feed">
        {messages.map((msg, index) => (
          <div key={index} class={`message-row ${msg.sender}`}>
            <div class="message-bubble">
              {msg.sender === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}

        {/* Animated Loading Status Block */}
        {isTyping && (
          <div class="message-row bot">
            <div
              class="message-bubble"
              style={{ color: "#94a3b8", fontStyle: "italic" }}
            >
              Gemini is thinking...
            </div>
          </div>
        )}
        <div ref={feedEndRef} />
      </div>

      {/* Action Controller Footer Box */}
      <footer class="chat-footer">
        <div class="input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
