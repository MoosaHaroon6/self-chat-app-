const body = document.querySelector('body');
const textField = document.querySelector('#user-text');
const textFieldTwo = document.querySelector('#user-text-two');
const chatsDiv = document.querySelector('.chats-div');
const chatScreen = document.querySelector('.chat-screen');
const colorChangerBtn = document.querySelector('.button');
const errorPara = document.querySelector('.error-para');

function sendMsg() {
    const textFieldVal = textField.value.trim();
    if (!textFieldVal) {
        errorDisplay("Enter Some Message");
        return;
    }
    appendChat(textFieldVal, 'left');
    textField.value = '';
}

function sendMsgTwo() {
    const textFieldTwoVal = textFieldTwo.value.trim();
    if (!textFieldTwoVal) {
        errorDisplay("Enter Some Message");
        return;
    }
    appendChat(textFieldTwoVal, 'right');
    textFieldTwo.value = '';
}

function appendChat(message, align) {
    const chatLine = document.createElement('p');
    chatLine.textContent = message;
    chatLine.className = align;
    chatsDiv.appendChild(chatLine);
    chatsDiv.scrollTop = chatsDiv.scrollHeight;
}

function clearAll() {
    chatsDiv.innerHTML = '';
    chatScreen.style.backgroundColor = "#fff"
}

function switchUser() {
    alert('User switched!');
}


document.addEventListener('DOMContentLoaded', () => {
    const chatScreen = document.querySelector('.chat-screen');
    const colorChangerBtn = document.querySelectorAll('.button');

    colorChangerBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            const clickedButton = e.target;
            const idButton = clickedButton.id;

            let color;

            switch (idButton) {
                case 'dark':
                    color = '#212121';
                    break;
                case 'orange':
                    color = '#ffda94';
                    break;
                case 'lightgray':
                    color = '#d3d3d3';
                    break;
                case 'pink':
                    color = '#ffe1e6';
                    break;
                default:
                    color = '#fff';
            }

            chatScreen.style.backgroundColor = color;
        });
        // colorToggle()
    });
});

function errorDisplay(msg) {
    errorPara.innerHTML = msg
    setTimeout(() => {
        errorPara.innerHTML = '';
    }, 3000)
}

let mainBody = document.querySelector('.main');
let color = "#212121"

function darkMode() {
    mainBody.style.backgroundColor = color
    body.style.backgroundColor = color
    colorToggle()
}

let isColorChanged = false

function colorToggle() {
    if (!isColorChanged) {
        mainBody.style.backgroundColor = color;
        body.style.backgroundColor = color;
        mainBody.style.boxShadow = '0 0 10px #007bff';
    }
    else {
        mainBody.style.backgroundColor = "";
        body.style.backgroundColor = "";
        mainBody.style.boxShadow = '';
    }
    isColorChanged = !isColorChanged
}