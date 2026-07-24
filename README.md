# AI-Powered Full-Stack Chatbot 🚀🤖

A responsive, dark-themed AI conversational dashboard constructed with a decoupled full-stack architecture. The application leverages a high-performance React user interface on the frontend, linked dynamically to a custom Python Flask API gateway that routes incoming message payloads directly to Google's cutting-edge Gemini AI engine.

## 🌟 Key Features
* **Modern Cyberpunk UI/UX:** A sleek dark-themed layout built with responsive CSS flexbox wrappers, featuring subtle glassmorphism drop-shadows and smooth fade-in animations.
* **Decoupled API Architecture:** Frontend and backend run independently, communicating safely across origins via structured JSON tokens and CORS middleware routing.
* **Real-time AI Intelligence:** Leverages the official Google GenAI SDK to generate instant context-aware answers, programming code snippets, and creative text solutions.
* **Live Status & UX Feedback:** Implements an automated "Thinking..." state manager and automatic auto-scrolling triggers to maintain chat container focus.

---

## 🛠️ Built With

### Frontend Stack
* **React** (Component-driven UI rendering)
* **Vite** (Optimized bundling tool for fast development modules)
* **CSS3** (Custom style rules, glowing focus transitions, keyframe animations)

### Backend Stack
* **Python** (Core application engine)
* **Flask** (Lightweight backend API framework)
* **Flask-CORS** (Cross-Origin Resource Sharing security configuration)
* **Google GenAI SDK** (Cloud model access via `gemini-2.5-flash`)
* **Python-Dotenv** (Secure decoupling of API credentials from source files)

---

## 📂 Project Structure

```text
ai_web_chatbot/
│
├── backend/
│   ├── app.py              # Flask server gateway & API routing
│   ├── .env                # Private credentials (ignored by Git)
│   └── .gitignore          # Rules for preventing sensitive data upload
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # React chat component & asynchronous state hooks
│   │   └── App.css         # Modern dark dashboard stylesheet
│   └── .gitignore          # Prevents heavy node modules tracking
└── README.md               # Complete project documentation
