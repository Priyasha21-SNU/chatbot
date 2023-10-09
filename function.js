const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    messageDiv.innerText = text;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    appendMessage(message, 'user');
    userInput.value = '';
}
function sendImage() {
    const imageInput = document.getElementById('image-upload');
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const imageDataURL = reader.result;
            appendImage(imageDataURL, 'user');
        }
        reader.readAsDataURL(file);
    }
}

function appendImage(imageDataURL, sender) {
    const imageDiv = document.createElement('div');
    imageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    const img = document.createElement('img');
    img.src = imageDataURL;
    img.style.maxWidth = '50%';
    img.style.height = 'auto';
    imageDiv.appendChild(img);
    chatOutput.appendChild(imageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

