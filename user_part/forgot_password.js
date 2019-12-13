function handleForgot() {
  let email = document.getElementById("email").value;
  document.getElementById(
    "forgot_form"
  ).innerHTML = `<h2>Reset your password</h2>
    <br />
    <label style="color: #242424;">
        We've sent a reset password email to <b>${email}</b>. Please click the reset password link to set your new password!
    </label>
    <br /><br />
    <label style="color: #242424;">
        Didn't receive the email yet?
    </label>
    <br />
    <label style="color: #242424;">
        Please check your spam folder, or <a href="./forgot_password.html">resend</a> the email.
    </label>
    <br /><br />
    <button
      type="button"
      id="login"
      class="btn btn-dark"
      style="width: 200px;"
      onclick="window.location.href='./login.html'"
    >
      Back to Login page
    </button>`;
}
