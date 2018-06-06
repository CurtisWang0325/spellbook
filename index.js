
const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value

  const spellsDiv = document.querySelector('#spells')
  const toAdd = document.createElement('li')
  toAdd.textContent=spellName
  spellsDiv.appendChild(toAdd)

  f.reset()
}

form.addEventListener('submit', changeHeading)