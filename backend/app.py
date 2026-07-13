import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
from dotenv import load_dotenv  # Import the environment loader

# Load the keys from your hidden .env file into the system configuration
load_dotenv()  # NOT load_model()

app = Flask(__name__)
CORS(app)

# Fetch the hidden variable safely using os.environ
api_key = os.environ.get("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

@app.route('/api/ask', methods=['POST'])
def ask_bot():
    try:
        user_data = request.get_json()
        user_message = user_data.get('message', '')

        if not user_message.strip():
            return jsonify({"response": "I didn't catch that. Please type something!"})

        response = client.models.generate_content(
            model='gemini-flash-latest',
            contents=user_message,
        )

        return jsonify({"response": response.text})

    except Exception as e:
        print(f"Error processing AI request: {e}")
        return jsonify({"response": "Sorry, I encountered an internal error processing that request."})

if __name__ == '__main__':
    app.run(port=5000, debug=True)