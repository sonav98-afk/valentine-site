function goBack() {
  window.history.back();
}

function wrongPasswordShake() {
  const box = document.querySelector(".container");
  box.classList.add("shake");
  setTimeout(() => box.classList.remove("shake"), 300);
}
