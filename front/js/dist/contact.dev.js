"use strict";

// const contactForm = document.getElementById("contact-form");
// const contactButton = document.getElementById("contact-form-submit");
// const contactErrorMsg = document.getElementById("contact-error-msg");
// contactButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = contactForm.uname.value;
//     const email = contactForm.email.value;
//     const message = contactForm.msg.value;
//     if (username === "" && email === "" && message ==="" ) 
//         {
//             // alert("You have successfully logged in.");
//              window.open("index.html");
//     }
//     else {
//         alert("Vérifier votre mot de passe ou votre mail.");
//     }
// }
// )
//     // if (username === "user@gmail.com" && password === "user123") {
//     //   // alert("You have successfully logged in.");
//     //   window.open("index.html");
// //   }
// //   else 
// //     if (username === "user144@gmail.com" && password === "azerty123") {
// //       // alert("You have successfully logged in.");
// //       window.open("index.html");
// //   }
// //   else 
// //     if (username === "user" && password === "user") {
// //       // alert("You have successfully logged in.");
// //       window.open("index.html");
// //   }
// //   else 
// //     if (username === "admin" && password === "admin") {
// //       // alert("You have successfully logged in.");
// //       window.open("Admin.html");
// //   }
// //     else {
// //       alert("Vérifier votre mot de passe ou votre mail.");
// //   }
var contactForm = document.getElementById("contact-form");
var contactButton = document.getElementById("contact-form-submit");
var contactErrorMsg = document.getElementById("contact-error-msg");
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  var username = loginForm.uname.value;
  var email = loginForm.email.value;
  var message = loginForm.msg.value;

  if (username === "sibtyhel@gmail.com" && email === "user1" && message === "ibty") {
    // alert("You have successfully logged in.");
    window.open("index.html");
  } else {
    alert("Vérifier votre mot de passe ou votre mail.");
  }
});