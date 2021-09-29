const bulbabtn = document.querySelector("#btn-texto01");
const bulbaimg = document.querySelector("#bulba");

bulbabtn.addEventListener('click', function() {
    if (bulbabtn.innerText === 'Evolve Bulbasaur?') {
        bulbabtn.innerText = 'Evolve Ivysaur?';
        bulbaimg.src = './media/image/ivysaur.png'
    } else if (bulbabtn.innerText === 'Evolve Ivysaur?') {
        bulbabtn.innerText = 'Im Venusaur!';
        bulbaimg.src = './media/image/venusaur.png'
    }
});

const catabtn = document.querySelector("#btn-texto02");
const catimg = document.querySelector("#cat");

catabtn.addEventListener('click', function() {
    if (catabtn.innerText === 'Evolve Caterpie?') {
        catabtn.innerText = 'Evolve Metapod?';
        catimg.src = './media/image/metapod.png';
    } else if (catabtn.innerText === 'Evolve Metapod?') {
        catabtn.innerText = 'Im Butterfree!';
        catimg.src = './media/image/butterfree.png'
    }
});

const charbtn = document.querySelector("#btn-texto03");
const charimg = document.querySelector("#char");

charbtn.addEventListener('click', function() {
    if (charbtn.innerText === 'Evolve Charmander?') {
        charbtn.innerText = 'Evolve Charmeleon?';
        charimg.src = './media/image/charmeleon.png';
    } else if (charbtn.innerText === 'Evolve Charmeleon?') {
        charbtn.innerText = 'Im Charizard!';
        charimg.src = './media/image/charizard.png'
    }
});

const sqrtlbtn = document.querySelector("#btn-texto04");
const sqrtlimg = document.querySelector("#sqrtl");

sqrtlbtn.addEventListener('click', function() {
    if (sqrtlbtn.innerText === 'Evolve Squirtle?') {
        sqrtlbtn.innerText = 'Evolve Wartortle?';
        sqrtlimg.src = './media/image/wartortle.png';
    } else if (sqrtlbtn.innerText === 'Evolve Wartortle?') {
        sqrtlbtn.innerText = 'Im Blastoise!';
        sqrtlimg.src = './media/image/blastoise.png'
    }
});