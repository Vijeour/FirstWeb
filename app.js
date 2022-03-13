const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  link.classList.toggle("show");
  document.querySelector(".links ").style.transition = "all 0.5s linear";
});
//  BMI Working

//document.querySelector("#resetbtn").addEventListener("click", resetform);

//function resetform() {
//  document.querySelector("#valuehght").value = "";
// document.querySelector("#valueweight").value = "";
// document.querySelector(".displaybmitext").value = "";
// document.querySelector("#result").value = "";
//}

//const height = document.querySelector("#valuehght").value;
//const weight = document.querySelector("#valueweight").value;
const formBmi = document.querySelector("#bmiForm");

formBmi.addEventListener("submit", displayMessage);

function displayMessage(e) {
  e.preventDefault();
  calcBMI();
}

function calcBMI() {
  let height = document.querySelector("#valuehght").value;
  let weight = document.querySelector("#valueweight").value;

  height = height / 100;

  if (weight < 35 || weight > 600) {
    alert("Please enter correct weight");
    document.querySelector("#result").value = "";
    document.querySelector(".displaybmitext").value = "";
  } else if (height > 2.4384 || height < 1.2192) {
    alert("Please enter correct height");
    document.querySelector("#result").value = "";
    document.querySelector(".displaybmitext").value = "";
  } else {
    BMI = weight / (height * height);
    let roundoffBMI = BMI.toFixed(1);

    document.querySelector("#result").value = roundoffBMI;

    if (roundoffBMI < 18.5) {
      document.querySelector(".displaybmitext").value = "Underweight";
    } else if (roundoffBMI > 18.5 && roundoffBMI < 24.9) {
      document.querySelector(".displaybmitext").value = "Normal";
    } else if (roundoffBMI > 25 && roundoffBMI < 29.9) {
      document.querySelector(".displaybmitext").value = "Overweight";
    } else {
      document.querySelector(".displaybmitext").value = "Obese";
    }
  }
}

// TDEE CALCULATIONS

// const weightbmr = document.querySelector("#weightinbmr").value;
// const btnbmr = document.querySelector(".bmrcalculation");
// const resultbmr = document.querySelector("#totalCalorie");
// let leanmass = 0.7 * weightbmr;

// btnbmr.addEventListener("click", function (e) {
// e.preventDefault();
// const weightbmr = document.querySelector("#weightinbmr").value;
// let leanmass = 0.7 * weightbmr;
// let f;
// let activity = document.querySelector("#activity").value;
// if (activity === "sedantry") {
// f = 0.2;
// } else if (activity === "little") {
// f = 0.375;
// } else if (activity === "lightlyactive") {
// f = 0.55;
// } else if (activity === "modactive") {
// f = 0.75;
// } else {
// f = 0.9;
// }
// let BMR = 370 + 9.79 * leanmass;
// let TEF = 0.1 * BMR;
// let TFE = f * BMR;
// let calorie = BMR + TEF + TFE;
// resultbmr.value = calorie;
// });
//    TABLE

// Modal Window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// Submit Form

document.querySelector("#resetcontactform").addEventListener("click", resetContactForm);

function resetContactForm(e) {
  e.preventDefault();
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#messagearea").value = "";
}

/*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let url = ".contactform.php";
  let method = "POST";
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.response);
      if (response.success) {
        form.innerHTML = response.message;
      }
    }
  };
  xhr.send(formData);
});*/

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "lourrachit@gmail.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
