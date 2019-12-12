function handleRegister() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let pw = document.getElementById("repassword").value;

  if (password === pw && username !== "" && email !== "" && password !== "") {
    document.getElementById(
      "register_form"
    ).innerHTML = `<h2>Register successful</h2>
        <br />
        <label>Thank you for choosing <b>BeeSure</b>!</label>
        <br /><br />
        <button
          id="reg"
          type="button"
          class="btn btn-dark"
          style="width: 200px;"
          onclick="window.location.href = './login.html'"
        >
          Go to Login page
        </button>`;
  } else {
    alert("Please fill and correct all information to register!");
  }
}
