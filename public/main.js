const socket = io();

socket.emit('new user', {});

const form = document.getElementById('form');
const messages = document.getElementById('messages');

// Utils
const createMessageElement = (text, className) => {
    const element = document.createElement('li');
    const elementText = document.createTextNode(text);
    element.classList.add(className);
    element.appendChild(elementText);
    return element;
}

const addMessageElement = (el) => {
    messages.appendChild(el);
}

// Listener
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const chatInput = document.getElementById('inputMessage');

    socket.emit('chat message', chatInput.value);
    chatInput.value = '';
    return false;
})

// Send or Recieve Messages
socket.on('chat message', (msg) => {
    const listItem = createMessageElement(msg, 'message')
    addMessageElement(listItem);
})

socket.on('user joined', numOfUsers => {
    const listItem = createMessageElement(`손님 등장 (${numOfUsers})`, 'log')
    addMessageElement(listItem);
})

socket.on('user left', numOfUsers => {
    const listItem = createMessageElement(`손님 퇴장 (${numOfUsers})`, 'log')
    addMessageElement(listItem);
})
