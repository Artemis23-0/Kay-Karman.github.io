function sendEmail() {
    var email = "krystal.j.karman@gmail.com";
    var subject = "I found your portfolio! Let's Connect...";
    var link = "mailto:" + email + "?subject=" + encodeURIComponent(subject);
    window.open(link, "_blank");
  }


  