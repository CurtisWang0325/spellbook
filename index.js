console.log('testing')
const heading1 = document.querySelector('#head1')
const heading2 = document.querySelector('#head2')
const button = document.querySelector('button')
button.addEventListener('click',(ev)=>{
    heading2.textContent="Changed";
})
const submit = document.querySelector('#submit')
submit.addEventListener('click',(ev)=>{ 
    heading1.textContent=document.getElementById('input').value;
})
