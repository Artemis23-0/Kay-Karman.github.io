function sendEmail() {
    var email = "krystal.j.karman@gmail.com";
    var subject = "I found your portfolio! Let's Connect...";
    var link = "mailto:" + email + "?subject=" + encodeURIComponent(subject);
    window.open(link, "_blank");
  }

const phoneInput = document.getElementById("phone");
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

phoneInput.addEventListener("input", function() {
  if (!phoneRegex.test(phoneInput.value)) {
    phoneInput.setCustomValidity("Please enter a valid phone number in the format XXX-XXX-XXXX");
  } else {
    phoneInput.setCustomValidity("sohfdsoi");
  }
});

  