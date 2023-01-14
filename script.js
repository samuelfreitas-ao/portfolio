const dataEl = document.querySelector("footer .date")
dataEl.innerHTML = `${new Date().getFullYear()}`

const switchThemeEl = document.querySelector("#switch-theme")
switchThemeEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("light")
})
