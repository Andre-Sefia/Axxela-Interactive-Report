// TABS
let tab1 = document.getElementById('commitmentListingTab1')
let tab2 = document.getElementById('commitmentListingTab2')
let tab3 = document.getElementById('commitmentListingTab3')

// IMAGES
let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')

//LINES
let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')
let line3 = document.getElementById('line3')

//FUNCTIONS
tab1.onclick = function(){
    if (image1.style.display = 'none'){
        image1.style.display = 'flex'
    }
    if (image2.style.display = 'flex'){
        image2.style.display = 'none'
    }
    if (image3.style.display = 'flex'){
        image3.style.display = 'none'
    }
    tab1.style.color = 'white'
    tab2.style.color = 'gray'
    tab3.style.color = 'gray'

    line1.style.backgroundColor = 'white'
    line1.style.height = '5px'
    line2.style.backgroundColor = 'gray'
    line2.style.height = '4px'
    line3.style.backgroundColor = 'gray'
    line3.style.height = '4px'
}

tab2.onclick = function(){
    if (image2.style.display = 'none'){
        image2.style.display = 'flex'
    }
     if (image1.style.display = 'flex'){
        image1.style.display = 'none'
    }
    if (image3.style.display = 'flex'){
        image3.style.display = 'none'
    }

    tab1.style.color = 'gray'
    tab2.style.color = 'white'
    tab3.style.color = 'gray'

    line2.style.backgroundColor = 'white'
    line2.style.height = '5px'
    line1.style.backgroundColor = 'gray'
    line1.style.height = '4px'
    line3.style.backgroundColor = 'gray'
    line3.style.height = '4px'
}

tab3.onclick = function(){
    if (image3.style.display = 'none'){
        image3.style.display = 'flex'
    }
     if (image2.style.display = 'flex'){
        image2.style.display = 'none'
    }
    if (image1.style.display = 'flex'){
        image1.style.display = 'none'
    }
    tab1.style.color = 'gray'
    tab2.style.color = 'gray'
    tab3.style.color = 'white'

    line3.style.backgroundColor = 'white'
    line3.style.height = '5px'
    line2.style.backgroundColor = 'gray'
    line2.style.height = '4px'
    line1.style.backgroundColor = 'gray'
    line1.style.height = '4px'
}

if(image1.style.display = 'flex'){
    tab1.style.color = 'white'
    line1.style.backgroundColor = 'white'
    line1.style.height = '5px'
}
