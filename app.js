// Simulate chat functionality with message history

// Message arrays for Tom and Jerry
let tomMessages = [];
let jerryMessages = [];

// Select elements
const tomMessageForm = document.getElementById('tom-message-form');
const jerryMessageForm = document.getElementById('jerry-message-form');
const tomMessagesContainer = document.getElementById('tom-messages');
const jerryMessagesContainer = document.getElementById('jerry-messages');

// Event listeners for message submission
tomMessageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendMessage('Tom', 'Jerry', 'tom-message-input', tomMessages, jerryMessages, tomMessagesContainer, jerryMessagesContainer);
});

jerryMessageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    sendMessage('Jerry', 'Tom', 'jerry-message-input', jerryMessages, tomMessages, jerryMessagesContainer, tomMessagesContainer);
});

// Function to send a message
function sendMessage(sender, receiver, inputId, senderMessages, receiverMessages, senderMessagesContainer, receiverMessagesContainer) {
    const messageInput = document.getElementById(inputId);
    const message = messageInput.value.trim();
    
    if (message) {
        // Add message to sender's message array
        senderMessages.push({ sender, message });
        
        // Update sender's message display
        updateMessageDisplay(senderMessages, senderMessagesContainer);

        // Add message to receiver's message array
        receiverMessages.push({ sender, message });
        
        // Update receiver's message display
        updateMessageDisplay(receiverMessages, receiverMessagesContainer);

        // Clear input field
        messageInput.value = '';
    }
}

// Function to update message display
function updateMessageDisplay(messages, messagesContainer) {
    messagesContainer.innerHTML = '';
    messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', msg.sender.toLowerCase());
        messageElement.innerHTML = `
            <div class="username">${msg.sender}</div>
            <div class="message-content">${msg.message}</div>
        `;
        messagesContainer.appendChild(messageElement);
    });
}
