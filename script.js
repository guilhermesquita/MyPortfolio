window.sr = ScrollReveal({reset: true});

sr.reveal('.main', {duration:4000})

sr.reveal('.main2', {
    rotate:{x:600, y:0, z:0},
    duration:2000})

sr.reveal('#text-about', {duration:3000})

sr.reveal('#ftr', {duration:1000})

sr.reveal('#contatos', {duration:4000})

const itens = document.getElementById('menuItens')

function clickMenu(){
    
    if(itens.style.display == 'flex'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'flex'
        itens.style.visibility = 'visible'
        itens.style.flexDirection = 'column'
        itens.style.gap = '10px'
        itens.style.marginTop = '8px'
        itens.style.alignItems = 'center'
    }
}

function closeMenu(){
    itens.style.display = 'none'
}