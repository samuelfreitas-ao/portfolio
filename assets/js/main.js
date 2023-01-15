const htmlEl = document.documentElement
const mainContentEl = htmlEl.querySelector('main')
const headerEl = htmlEl.querySelector('header')
const footerEl = htmlEl.querySelector('footer')

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

const switchThemeEl = headerEl.querySelector('#switch-theme')
switchThemeEl.addEventListener('click', () => {
  if (htmlEl.classList.contains('light')) {
    theme('dark')
  } else {
    theme('light')
  }
  loadTheme()
})

const dateEl = footerEl.querySelector('footer .date')
dateEl.innerHTML = `${new Date().getFullYear()}`

class SkillService {
  /**
   * @typedef {name: string, level: number} SkillType
   */
  /**
   * Get a skill list
   * @returns {{languages: SkillType[], databases: SkillType[]}}
   */
  static skillList() {
    return {
      languages: [
        { name: 'JavaScript', level: 3 },
        { name: 'HTML', level: 4 },
        { name: 'CSS', level: 3 },
        { name: 'ReactJs', level: 3 },
        { name: 'ReactNative', level: 2 },
        { name: 'Laravel', level: 3 },
        { name: 'PHP', level: 4 },
        { name: 'Java SE', level: 2 },
        { name: 'Nodejs', level: 3 },
        { name: 'NextJs', level: 3 },
        { name: 'TypeScript', level: 4 },
        { name: 'RxJs', level: 2 },
        { name: 'TailwindCss', level: 3 },
        { name: 'JQuery', level: 3 },
        { name: 'Ejs', level: 2 },
      ],
      databases: [
        { name: 'MySQL', level: 3 },
        { name: 'SQLServer', level: 3 },
        { name: 'MongoDB', level: 2 },
      ],
    }
  }

  /**
   *
   * @param {string} skillName
   * @param {number} level
   * @returns {string} returns a skill box element <li>
   */
  static getSkill(skillName, level) {
    return `
      <li class="skill-box" title="${this.skillDescription(level)}">
        ${skillName} ${this.getLevel(level)}
      </li>
    `
  }

  /**
   * @param {number} level
   * @returns {string} returns a skill level list element <ul>
   */
  static getLevel(level) {
    let liCollection = ''
    for (let i = 0; i < 5; i++) {
      liCollection += `
        <li class="skill-level-box ${level > i ? 'active' : ''}"></li>
      `
    }
    return `
      <ul class="skill-level-list">
        ${liCollection}
      </ul>
    `
  }

  /**
   * Render the kills´ list
   * @returns {void}
   */
  static render() {
    const { languages, databases } = this.skillList()

    let skillListEl = `
      <div class="skill-title">Bom domínio de linguagens de programação, frameworks e template engines</div>
        <div class="skill-list">
    `
    for (const skill of languages) {
      skillListEl += SkillService.getSkill(skill.name, skill.level)
    }
    //Close div.skill-list
    skillListEl += `</div>`

    skillListEl += `
      <div class="skill-title">Base de dados</div>
        <div class="skill-list">
    `
    for (const skill of databases) {
      skillListEl += SkillService.getSkill(skill.name, skill.level)
    }
    //Close div.skill-list
    skillListEl += `</div>`

    mainContentEl.querySelector('.skill-container').innerHTML = skillListEl
  }

  /**
   *
   * @param {number} level
   * @returns {string}
   */
  static skillDescription(level) {
    switch (level) {
      case 1:
        return 'Iniciante: Académico, em formação'
      case 2:
        return 'Intermediário: pequeno projeto ou estágio'
      case 3:
        return 'Avançado: experiência de projeto'
      case 4:
        return 'Profissional: Vasta experiência profissional'
      default:
        return 'Especialista'
    }
  }
}

SkillService.render()
