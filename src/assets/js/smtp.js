const initializeApp = require("https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js")

const firebaseConfig = {
  apiKey: "AIzaSyA3Erx2teApzsW1ZjUmcwtlYizLCLKQO78",
  authDomain: "meuportfolio-fd9cc.firebaseapp.com",
  projectId: "meuportfolio-fd9cc",
  storageBucket: "meuportfolio-fd9cc.appspot.com",
  messagingSenderId: "809926208032",
  appId: "1:809926208032:web:2dbc1765051bbe9271aa45",
  measurementId: "G-X69CP9VE4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = app.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
  sendEmail(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    email: email,
    message: message, 
  });
}

// Send Email Info
function sendEmail(name, email, message) {
  email.send({
    Host: "smtp.gmail.com",
    Username: 'rmnprojetos@gmail.com',
    Password: "wjnjbfvmydpojopd",
    To: "rmnprojetos@gmail.com",
    From: 'rmnprojetos@gmail.com',
    Subject: `CONTATO - SITE AGRESTECH`,
    Body: `Name; ${name} <br/> Email: ${email} <br/> Mensagem: ${message}`
  }).then((message) => alert("Mensagem enviada com Sucesso"))
}

