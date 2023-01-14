const dataEl = document.querySelector('footer .date')
dataEl.innerHTML = `${new Date().getFullYear()}`

const htmlEl = document.documentElement

/**
 * @typedef {'light' | 'dark'} ThemeClass
 */

/**
 *
 * @param {ThemeClass | undefined} text
 * @returns {string | void}
 */
const theme = (text) =>
  text ? localStorage.setItem('theme', text) : localStorage.getItem('theme')

/**
 *
 * @param {ThemeClass} classToAdd Class to add to the theme
 * @param {ThemeClass} classToRemove Class to remove from theme
 * @returns {void}
 */
function handleThemeClass(classToAdd, classToRemove) {
  htmlEl.classList.remove(classToRemove)
  htmlEl.classList.add(classToAdd)
}

/**
 * Loads current theme, light if defined in localStorage otherwise loads dark.
 * @returns {void}
 */
function loadTheme() {
  const currentTheme = theme()
  if (currentTheme) {
    if (currentTheme == 'light') {
      handleThemeClass('light', 'dark')
    } else {
      handleThemeClass('dark', 'light')
    }
  }
}

loadTheme()

const switchThemeEl = document.querySelector('#switch-theme')
switchThemeEl.addEventListener('click', () => {
  if (htmlEl.classList.contains('light')) {
    theme('dark')
  } else {
    theme('light')
  }
  loadTheme()
})
