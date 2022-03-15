let firebaseConfig = {
  apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
  authDomain: "test-form-d3492.firebaseapp.com",
  databaseURL: "https://test-form-d3492.firebaseio.com",
  projectId: "test-form-d3492",
  storageBucket: "test-form-d3492.appspot.com",
  messagingSenderId: "222398070278",
  appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = app.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form button").addEventListener("click", submitForm);


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
    Subject: `CONTATO - MEU PORTFÓLIO`,
    Body: `Name; ${name} <br/> Email: ${email} <br/> Mensagem: ${message}`
  }).then((message) => alert("Mensagem enviada com Sucesso"))
}

