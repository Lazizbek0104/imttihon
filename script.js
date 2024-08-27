let menuBtn = document.querySelector('.menu')
let closeBtn = document.querySelector('.close')
let navBtn = document.querySelector('.nav-list')
let linkBtn = document.querySelector('a')

menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
    navBtn.style.display = 'inline-block'
    linkBtn.style.width = '250px'
    linkBtn.style.color = 'white'
})

closeBtn.addEventListener('click', ()=>{
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block'
    navBtn.style.display = 'none'
})
