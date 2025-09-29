'use strict'

async function buscarPopulares(){
    const nome = document.getElementById('input').value
    const apikey = 15801986
    const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${nome}`

    const response = await fetch(url)
    const imagens = await response.json()

    const cards = document.getElementById('cards-populares')
    cards.innerHTML = ''

    imagens.forEach(urlImagem => {
        const imagem = document.createElement('img')
        imagem.src = urlImagem
        cards.appendChild(imagem)
    });
}

