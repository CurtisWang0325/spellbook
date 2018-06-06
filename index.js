
const form = document.querySelector('form')

function getName(ev){
    return ev.target.spellName.value
}

function getLevel(ev){
    return ev.target.level.value
}

function write(newSpellName){
    const spellsDiv = document.querySelector('#spells')
    const toAdd = document.createElement('li')
    toAdd.textContent=newSpellName
    spellsDiv.appendChild(toAdd)
    
}

const addSpell = function(ev) {
  ev.preventDefault()
  const newSpellName = getName(ev)
  const newSpellLevel = getLevel(ev)
  write(`${newSpellName} is level ${newSpellLevel}`)
  ev.target.reset()
}


form.addEventListener('submit', addSpell)