const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  const pass = document.getElementById("password");
  if (checkbox.checked) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});
