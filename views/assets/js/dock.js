const HTML_dock_items = document.querySelector('.dock-items')

const dock = {
  add (app) {
    HTML_dock_items.innerHTML += `<div class="dock-items-btn" onclick="launchApp(${app.command})" id="launcher-item-${app.name}" style="background-image: url(${app.icon})"></div>`
  },

  fill () {
    const l = apps.get.favorite()
  
    HTML_dock_items.innerHTML = ''
  
    for (i in l) {
      this.add(l[i])
    }
  },
  
  update (id, options) {
    const item = document.querySelector(`#dock-item-${id}`)
  }
}