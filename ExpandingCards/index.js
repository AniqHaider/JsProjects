function removeAcitveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAcitveClasses();
    panel.classList.add("active");
  });
});
