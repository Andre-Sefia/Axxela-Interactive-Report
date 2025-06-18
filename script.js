let burgerMenu = document.getElementById('burgerMenu')
let navBar = document.getElementById('navBar')
let cancel = document.getElementById('cancel')
let sideBar = document.getElementById('sideBar')
let body = document.getElementById('body')


burgerMenu.onclick = function(){
    if(sideBar.style.display = 'none'){
        sideBar.style.display = 'flex'
    }
}

cancel.onclick = function(){
    if(sideBar.style.display = 'flex'){
        sideBar.style.display = 'none'
    }
}
