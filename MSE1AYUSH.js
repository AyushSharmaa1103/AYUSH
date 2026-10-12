// ---------- BMI Calculator ----------
function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = document.getElementById("bmiResult");

  if (weight <= 0 || height <= 0) {
    result.innerHTML = "Please enter valid weight and height.";
    return;
  }

  var h = height / 100;               // cm to metres
  var bmi = weight / (h * h);         // BMI formula
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = "Your BMI is " + bmi.toFixed(1) + " (" + category + ")";
}

// ---------- Contact form validation ----------
function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var msg = document.getElementById("formMsg");

  if (name == "" || email == "" || message == "") {
    msg.innerHTML = "Please fill in all fields.";
  } else {
    msg.innerHTML = "Thank you, " + name + "! We will contact you soon.";
  }
}
