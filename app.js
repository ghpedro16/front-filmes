'use strict'

const apikey = 15801986

async function carrossel(){
    const cards = document.createElement('div')

    
}

async function buscar(){
    const nome = document.getElementById('input').value
    const url = `http://www.omdbapi.com/?apikey=${apikey}&t=${nome}`

    const response = await fetch(url)
    const imagens = await response.json()

    const cards = document.getElementById('busca')
    cards.innerHTML = ''

    imagens.forEach(function(item){
        if(nome == item.title){
            let img = item.poster 
            img = document.createElement('img')
            cards.appendChild(img)
        }

    });
}

const buscar = document.getElementById('btn-pesquisa')
buscar.addEventListener('click', buscar())

async function filmes(){
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=Marvel`

    const response = await fetch(url)
    const cards = await response.json()

    const filmes = document.getElementById('filmes')
    filmes.innerHTML = ''

    cards.Search.forEach(function(item){
        const imagem = document.createElement('img')
        imagem.poster = item 
        filmes.appendChild(imagem.item)
    })
}

filmes()