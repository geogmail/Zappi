
//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyBLpd5NGpvI1QBXlvQignPK_aOzERQGQxY",
  authDomain: "birdly-888c5.firebaseapp.com",
  databaseURL: "https://birdly-888c5-default-rtdb.firebaseio.com",
  projectId: "birdly-888c5",
  storageBucket: "birdly-888c5.appspot.com",
  messagingSenderId: "1024691240768",
  appId: "1:1024691240768:web:929839a43c83095e4c84a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "zappiPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomName = childKey;
      console.log("Nome da Sala - " + roomName);
      row = "<div class='roomName' id=" + roomName + " onclick='redirectToRoomName(this.id)' >#" + roomName + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "zappiPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}