const apps = [
  {
    name: 'Chromium',
    descritpion: 'Open-Source chrome',
    icon: '../storage/icons/chromium-browser.png',
    command: 'chromium-browser',
    favorite: false,
  },
  {
    name: '7zip',
    descritpion: 'Unzip a zip archive',
    icon: '../storage/icons/7zip.png',
    command: '7zip',
    favorite: false,
  },
  {
    name: 'Arduino',
    descritpion: 'Developpe firmwares for arduinos microcontroler',
    icon: '../storage/icons/arduino.png',
    command: 'arduinoide',
    favorite: true,
  },
  {
    name: 'Discord',
    descritpion: 'Just speak with people',
    icon: '../storage/icons/discord.png',
    command: 'discord',
    favorite: true,
  },
  {
    name: 'Brave',
    descritpion: 'Navigate on the web without ads',
    icon: '../storage/icons/brave.png',
    command: 'brave',
    favorite: true,
  },
  {
    name: 'Calendar',
    descritpion: 'What days are we?',
    icon: '../storage/icons/calendar-blue-01.png',
    command: 'calendar',
    favorite: false,
  },
  {
    name: 'Blender',
    descritpion: 'Make 3d objects',
    icon: '../storage/icons/blender.png',
    command: 'blender',
    favorite: true,
  },
  {
    name: 'Twitter',
    descritpion: 'TTTWWWWEEEETTTTT',
    icon: '../storage/icons/web-twitter.png',
    command: '=https://twitter.com',
    favorite: false,
  },
  {
    name: 'What\'s App',
    descritpion: 'Chat.',
    icon: '../storage/icons/web-whatsapp.png',
    command: '=https://web.whatsapp.com',
    favorite: false,
  },
  {
    name: 'Everynote',
    descritpion: 'Note things',
    icon: '../storage/icons/web-evernote.png',
    command: '=https://www.evernote.com',
    favorite: false,
  }
]

module.exports = {
  favorite () {
    const result = []

    for (i in apps) {
      if (apps[i].favorite) {
        result.push(apps[i])
      }
    }

    return result
  },

  search (text) {
    const result = []

    text = text.toLocaleLowerCase()

    for (i in apps) {
      apps[i].name = apps[i].name.toLocaleLowerCase()
      if (apps[i].name.includes(text)) {
        result.push(apps[i])
      }
    }

    return result
  },

  all () {
    return apps
  }
}