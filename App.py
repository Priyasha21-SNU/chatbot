from flask import Flask, request, jsonify
import openai
app = Flask(__name__)
openai.api_key = "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" 

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.json['user_input']

    # Generate bot response using OpenAI
    response = generate_bot_response(user_input)

    return jsonify({"bot_response": response})
def generate_bot_response(user_input):
    response = openai.Completion.create(
        engine="davinci-codex", 
        prompt=user_input,
        max_tokens=50 
    )

    return response.choices[0].text.strip()

if __name__ == '__main__':
    app.run(debug=True)
