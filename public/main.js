const socket = io();

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const chatInput = document.getElementById('m');

    socket.emit('chat message', chatInput.value);
    chatInput.value = '';
    return false;
})

socket.on('chat message', (msg) => {
    const messages = document.getElementById('messages');
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(msg);
    listItem.appendChild(listItemText);
    messages.appendChild(listItem);
})