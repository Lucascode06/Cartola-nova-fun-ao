document.addEventListener("DOMContentLoaded", () => {
    const chatToggleImage = document.querySelector('.chat-img');
    const chatContainer = document.querySelector('.chat-container');
    const chatToggle = document.getElementById('chat-toggle');

    chatToggleImage.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    });
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    });
});
