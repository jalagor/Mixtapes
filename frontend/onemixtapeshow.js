const searchParams = new URLSearchParams(window.location.search)
const mixtapeid = searchParams.get('id')

fetch(`http://localhost:3000/mixtapes/${mixtapeid}`)
    .then(response=>response.json())
    .then(mixtape=>{
        const header = document.querySelector('header')
        const mixtapeContainer = document.querySelector('.mixtape')
        const h1 = document.createElement('h1')
        const homeButton = document.createElement('h5')
        // const deleteMixTape = document.createElement('button')
        // deleteMixTape.innerText = "Delete Mixtape"
        // deleteMixTape.addEventListener('click', ()=>{
        //     deleteMixtape(mixtape.id)
        // })
        h1.innerText = mixtape.name
        h1.className = "mixtape-name"
        // h1.appendChild(deleteMixTape)
        homeButton.className = "home-button"
        homeButton.innerHTML = `<a href="http://localhost:3001">Go to Homepage</a>`
        header.appendChild(h1)
        mixtape.songs.sort(aToZ).map(song=>{
            const thisMixtapeSongContainer = document.querySelector('.this-mixtapes-songs')
            const songItem = document.createElement('li')
            const playButton = document.createElement('button')
            const pauseButton = document.createElement('button')
            const deleteButton = document.createElement('button')
            songItem.className = "song-title"
            songItem.innerText = `${song.title} - ${song.artist}    `

            playButton.type = "button"
            playButton.className = "play-button"
            playButton.addEventListener('click', ()=>{
                playAudio(song)})
            pauseButton.type = "button"
            pauseButton.className = "pause-button"
            pauseButton.addEventListener('click', () => {
                pauseAudio(song)})

            // deleteButton.innerText = "delete"
            deleteButton.className = "delete-button"
            deleteButton.addEventListener('click', () => {
                event.target.parentNode.remove()
                findMixtapeSong(song.id)
            })
            // list.appendChild(songItem)
            songItem.append(playButton, pauseButton, deleteButton)
            thisMixtapeSongContainer.appendChild(songItem)
            // mixtapeContainer.append(songItem)
        })
    })

function aToZ(a, b){
        if (a.title < b.title){return -1} 
        else if (a.title > b.title){return 1}
        else {return 0}
}

const sound = new Audio()

function playAudio(song){
    sound.src = `${song.preview}`
    sound.play()
}

function pauseAudio(song){
    sound.src = `${song.preview}`
    sound.pause()
}

fetch('http://localhost:3000/songs')
    .then(response=>response.json())
    .then(songs=>songs.sort(aToZ).map(selectSongs))

function aToZ(a, b){
        if (a.title < b.title){return -1} 
        else if (a.title > b.title){return 1}
        else {return 0}
}

function selectSongs(song){
    const songContainer = document.querySelector('.all-songs')
    const songName = document.createElement('li')
    const songButton = document.createElement('button')
    const playButton = document.createElement('button')
    const pauseButton = document.createElement('button')
    // songButton.innerText = "Add to Mixtape"
    songButton.className = "song-button"
    songName.innerText = `${song.title} - ${song.artist}    `
    songName.value = song.id
    songName.className = "song-name"

    playButton.type = "button"
    playButton.className = "play-button"
    playButton.addEventListener('click', ()=>{
        playAudio(song)})
    pauseButton.type = "button"
    pauseButton.className = "pause-button"
    pauseButton.addEventListener('click', () => {
        pauseAudio(song)})

    songName.append(playButton, pauseButton, songButton)
        songButton.addEventListener('click', ()=>{
            addSong(song.id)
        })
    songContainer.appendChild(songName)
}

function addSong(songID){
    fetch(`http://localhost:3000/mixtape_songs`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body:JSON.stringify({song_id: songID, mixtape_id: mixtapeid})
        
    })
}



function searchSongs(){
    const input = (document.querySelector('.song-search').value).toLowerCase()
    const songArray = Array.prototype.slice.call(document.querySelectorAll('.song-name'))
    songArray.forEach(song => {
        if (song.innerText.toLowerCase().includes(input)){
            song.style.display = "";
        } else {
            song.style.display = "none"
        }
    })
}


// function deleteMixtape(mixtape){
//     fetch(`http://localhost:3000/mixtapes/${mixtape}`, {
//         method: 'DELETE'
//     })
// }


function findMixtapeSong(songid){
    fetch(`http://localhost:3000/mixtape_songs`)
        .then(response=>response.json())
        .then(mixtapesongs=>mixtapesongs.find(mixtapesong=>{
            if (mixtapesong.song_id == songid && mixtapesong.mixtape_id == mixtapeid)
            {deleteSong(mixtapesong.id)}
        }))
}

function deleteSong(msid){
    fetch(`http://localhost:3000/mixtape_songs/${msid}`, {
        method: 'DELETE'
    })
}

// function notFound(){
//     const notFound = document.querySelector('.not-found')
//     const notFoundText = document.createElement('h3')
//     notFound.innerText = "This song does not exist in our database."
//     notFound.appendChild(notFound)
//     notFound.style.display = ""
// }

// function reloadPage(){
//     window.location.reload();
// }
