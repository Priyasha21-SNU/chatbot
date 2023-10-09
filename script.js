function getBotResponse(userInput) {
    fetch('/get_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_input: userInput })
    })
    .then(response => response.json())
    .then(data => {
        displayBotMessage(data.bot_response);
    })
    .catch(error => console.error('Error:', error));
}
