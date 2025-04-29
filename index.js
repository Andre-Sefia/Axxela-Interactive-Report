let show = document.getElementById('show')
let hidden = document.getElementById('hidden')
let nav = document.getElementById('nav')

nav.onclick = function(){
    if (show.style.display = 'flex'){
        show.style.display = 'none'
        hidden.style.display = 'flex'
    }
}
