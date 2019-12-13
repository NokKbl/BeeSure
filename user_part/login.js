function handleLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "user123@email.com" && password === "user123") {
    window.location.href = "../website_part/website.html";
  } else if (email === "admin@beesure.com" && password === "beesure1312") {
    window.location.href = "../admin_part/bookmark_record.html";
  } else {
    alert("Email or Password is not correct. Please try again!");
  }
}
