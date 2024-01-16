var firstName = document.getElementById("f_name");
var lastName = document.getElementById("l_name");
var eMail = document.getElementById("email");
var select = document.getElementById("country");
var postalCode = document.getElementById("p_code");
var phoneNumber = document.getElementById("tel");
var ccNumber = document.getElementById("cc_number");
var securityCode = document.getElementById("sec_code");
var expirationDate = document.getElementById("exp_date");
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var ccFormat = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/;
var numbers = /^[0-9]+$/;
var error = true;

function validate() {
  //checking fields
  if (firstName.value.length == 0 || firstName.value.length > 20 || firstName.value.match(numbers)) {
    var parent = firstName.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = firstName.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (lastName.value.length == 0 || lastName.value.length > 20 || lastName.value.match(numbers)) {
    var parent = lastName.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = lastName.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (!eMail.value.match(emailFormat)) {
    var parent = eMail.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = eMail.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (select.value == "Default") {
    var parent = select.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = select.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (!postalCode.value.match(numbers) || postalCode.value.length > 5) {
    var parent = postalCode.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = postalCode.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (!phoneNumber.value.match(/^\d{10}$/)) {
    var parent = phoneNumber.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = phoneNumber.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (!ccNumber.value.match(ccFormat)) {
    var parent = ccNumber.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = ccNumber.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (!securityCode.value.match(numbers) || securityCode.value.length == 0 || securityCode.value.length > 3) {
    var parent = securityCode.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = securityCode.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  if (expirationDate.value.length == 0 || expirationDate.value.length > 5) {
    var parent = expirationDate.parentElement;
    parent.querySelector(".error").innerText = "Required";
    parent.querySelector(".error").style.display = "block";
    error = true;
  } else {
    error = false;
    var parent = expirationDate.parentElement;
    parent.querySelector(".error").style.display = "none";
  }
  console.log(error);
  if (error == false) {
    window.location.assign('https://www.google.com');
  }

}