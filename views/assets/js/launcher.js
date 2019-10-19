let isActive = false

const HTML_launcher = document.querySelector('.launcher')
const HTML_app_list = document.querySelector('.app-list')
const HTML_dock = document.querySelector('.dock')
const HTML_infos = document.querySelector('.infos')
const HTML_desktop = document.querySelector('.desktop')

const launcher = {
  toggle (show) {
    if (isActive || show === false) {
      isActive = false
  
      HTML_launcher.style.display = 'none'
      HTML_desktop.style.visibility = 'visible'
      HTML_dock.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
      HTML_infos.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    } else {
      isActive = true
      this.fill()

      HTML_launcher.style.display = 'block'
      HTML_desktop.style.visibility = 'hidden'
      HTML_dock.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      HTML_infos.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
  },

  add (app) {
    HTML_app_list.innerHTML += `<div class="app-launcher" onclick="launchApp(${app.command})" id="launcher-item-${app.name}" style="background-image: url(${app.icon})"></div>`
  },

  fill () {
    const l = apps.get.all()
  
    HTML_app_list.innerHTML = ''
  
    for (i in l) {
      this.add(l[i])
    }
  },

  search (text) {
    const l = apps.get.search(text)
  
    HTML_app_list.innerHTML = ''
  
    for (i in l) {
      this.add(l[i])
    }
  }
}