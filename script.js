function scrollToSubscribe() {
  document.getElementById("subscribe").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("subscription-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  document.getElementById("confirmation-msg").textContent = `You're in! Welcome to SWANTON! WEARS, ${email}.`;
  document.getElementById("email").value = "";
});
