//signup inputs
var clientNameUpInput = document.getElementById("clientNameUp");
var clientEmailUpInput = document.getElementById("clientEmailUp");
var clientPasswordUpInput = document.getElementById("clientPasswordUp");

// login inputs
var clientEmailInInput = document.getElementById("clientEmailIn");
var clientPasswordInInput = document.getElementById("clientPasswordIn");

var clientList = localStorage.getItem("clients")
  ? JSON.parse(localStorage.getItem("clients"))
  : [];

var signUpButton = document.querySelector("#signUpButton");
var propmpt = document.getElementById("validationAlert");

if (signUpButton) {
  signUpButton.addEventListener("click", function () {
    var result = addNewClient();
    if (result === 2) {
      if (propmpt) {
        propmpt.innerHTML = "Success";
        setTimeout(function () {
          window.location.href = "login.html";
        }, 300);
      }
    } else {
      if (propmpt) {
        if (result === 1) {
          propmpt.innerHTML = "All inputs are required";
        } else {
          propmpt.innerHTML = "email is already exist";
        }
      }
    }
  });
}

function addNewClient() {
  
    var clientInfo = {
      clientName: clientNameUpInput.value,
      clientEmail: clientEmailUpInput.value,
      clientPassword: clientPasswordUpInput.value,
    };
    if (
      clientInfo.clientName == "" ||
      clientInfo.clientEmail == "" ||
      clientInfo.clientPassword == ""
    ) {
      return 1;
    }

    for (var i = 0; i < clientList.length; i++) {
      if (clientInfo.clientEmail === clientList[i].clientEmail) {
        return 0;
      }
    }

    clientList.push(clientInfo);
    localStorage.setItem("clients", JSON.stringify(clientList));
    return 2;
  }
    
  


var signInButton = document.querySelector("#signInButton");
if (signInButton) {
  signInButton.addEventListener("click", function () {
    if (validLogin()) {
      window.location.href = "home.html";
    } else {
      alert("wrong email or password");
    }
  });
}

function validLogin() {
  for (var i = 0; i < clientList.length; i++) {
    if (
      clientEmailInInput.value === clientList[i].clientEmail &&
      clientPasswordInInput.value === clientList[i].clientPassword
    ) {
      localStorage.setItem("current", clientList[i].clientName);
      return true;
    }
  }
  return false;
}

setTimeout(5);
var username = localStorage.getItem("current");
setTimeout(1);
var nameOfuserElement = document.getElementById("nameOfuser");
if (nameOfuserElement) {
  nameOfuserElement.innerHTML = username;
}

function logOut() {
  localStorage.removeItem("current");
  window.location.href = "index.html";
}

var logOutButton = document.getElementById("logOut");
if (logOutButton) {
  logOutButton.addEventListener("click", logOut);
}


