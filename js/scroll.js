const chatContainer = document.getElementById('chat-container');
const newMessageInput = document.getElementById('new-message');
const sendButton = document.getElementById('send-button');

// Function to add a new message to the chat container
function addMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
}

// Function to scroll to the bottom of the chat container
function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event listener for sending a new message
sendButton.addEventListener('click', () => {
  const message = newMessageInput.value;
  if (message) {
    addMessage(message);
    newMessageInput.value = '';
    scrollToBottom();
  }
});

// You can call scrollToBottom() whenever a new message arrives from another user.
