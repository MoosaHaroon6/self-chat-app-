const textField = document.querySelector('#user-text');
const textFieldtwo = document.querySelector('#user-text-two');
let leftChatsDiv = document.querySelector('#left-chats');
let rightChatsDiv = document.querySelector('#right-chats');
const leftChatsArray = [];
const rightChatsArray = [];

function sendMsg() {
    let textFieldVal = textField.value;
    if (textField.value === '') {
        alert('enter')
    } else {
        leftChatsArray.push(textFieldVal);
        printAllChats();
        textField.value = '';
    }
}

function sendMsgTwo() {
    let textFieldtwoVal = textFieldtwo.value;
    rightChatsArray.push(textFieldtwoVal);
    console.log(textFieldtwoVal);
    printAllChatsTwo();
    textFieldtwo.value = '';
}

function printAllChats() {
    leftChatsDiv.innerHTML = '';
    leftChatsArray.forEach(chat => {
        leftChatsDiv.innerHTML += `<p>${chat}</p>`;
    });
}

function printAllChatsTwo() {
    rightChatsDiv.innerHTML = '';
    rightChatsArray.forEach(chat => {
        rightChatsDiv.innerHTML += `<p>${chat}</p>`;
    });
}

function clearAll() {
    leftChatsArray.length = 0;
    rightChatsArray.length = 0;
    leftChatsDiv.innerHTML = '';
    rightChatsDiv.innerHTML = '';
}

function swicthUser() {
    alert('User switched!');
}