document.getElementById("btnTema").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("tema") === "dark") document.body.classList.add("dark");
