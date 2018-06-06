
const form = document.querySelector('form')

function getName(ev){
    return ev.target.spellName.value
}

function getLevel(ev){
    return ev.target.level.value
}

function insert(li,toAdd){
    const tempName=document.createElement('span')
    tempName.textContent=toAdd;
    li.appendChild(tempName)
}

function write(name,level){
    const spellsDiv = document.querySelector('#spells')
    const templi = document.createElement('li')
    insert(templi,name)
    insert(templi,level)
    
    spellsDiv.appendChild(templi)
    
}


const addSpell = function(ev) {
  ev.preventDefault()
  const newSpellName = getName(ev)
  const newSpellLevel = getLevel(ev)
  write(newSpellName,newSpellLevel)
  ev.target.reset()
}


form.addEventListener('submit', addSpell)