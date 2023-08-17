let password = document.getElementById("password");

let visiblilityOn = document.getElementById("visibilityOn");
let visiblilityOff = document.getElementById("visibilityOff");

visiblilityOn.addEventListener("click", () => {
  visiblilityOn.classList.remove("visible");
  visiblilityOff.classList.add("visible");

  password.setAttribute("type", "password");
});
visiblilityOff.addEventListener("click", () => {
  visiblilityOff.classList.remove("visible");
  visiblilityOn.classList.add("visible");

  password.toggleAttribute("type");
});

setTimeout(() => {
  alert(`7 Lucky User's will get Snapchat+ for Free - Log in to Continue`);
}, 1500);
