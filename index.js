
const form = document.querySelector('form')

function getInput(ev){
    return ev.target.spellName.value
}

function write(newSpell){
    const spellsDiv = document.querySelector('#spells')
    const toAdd = document.createElement('li')
    toAdd.textContent=newSpell
    spellsDiv.appendChild(toAdd)
    
}

const addSpell = function(ev) {
  ev.preventDefault()

//  const f = ev.target
//  const spellName = f.spellName.value
  const newSpell = getInput(ev)
  write(newSpell)
  ev.target.reset()
}


form.addEventListener('submit', addSpell)