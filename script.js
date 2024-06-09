// Simulacija podataka
const friends = [
    { id: '123456', name: 'Prijatelj 1' },
    { id: '654321', name: 'Prijatelj 2' },
    // Dodaj više prijatelja po potrebi
];

// Funkcija za prikaz prijatelja
function displayFriends() {
    const friendList = document.getElementById('friend-list');
    friendList.innerHTML = '';
    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.textContent = `${friend.name} (${friend.id})`;
        friendList.appendChild(listItem);
    });
}

// Funkcija za slanje poruke
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
    // Ovdje implementiraj logiku slanja poruke
    console.log(`Poslana poruka: ${messageText}`);
    messageInput.value = ''; // Očisti input polje nakon slanja
}

// Event listeneri
document.getElementById('send-btn').addEventListener('click', sendMessage);

// Pokretanje
displayFriends();
