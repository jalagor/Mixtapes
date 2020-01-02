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
        mixtape.songs.map(song=>{
            const thisMixtapeSongContainer = document.querySelector('.this-mixtapes-songs')
            const songItem = document.createElement('li')
            // const deleteButton = document.createElement('button')
            songItem.className = "song-title"
            songItem.innerText = song.title

            // list.appendChild(songItem)
            thisMixtapeSongContainer.appendChild(songItem)
            // mixtapeContainer.append(songItem)
        })
    })

fetch('http://localhost:3000/songs')
    .then(response=>response.json())
    .then(songs=>songs.map(selectSongs))

function selectSongs(song){
    const songContainer = document.querySelector('.all-songs')
    const songName = document.createElement('li')
    const songButton = document.createElement('button')
    songButton.innerText = "Add to Mixtape"
    songName.innerText = song.title
    songName.value = song.id
    songName.className = "song-name"
    songName.appendChild(songButton)
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


// function findMixtapeSong(songid){
//     fetch(`http://localhost:3000/mixtape_songs`)
//         .then(response=>response.json())
//         .then(mixtapesongs=>mixtapesongs.find(mixtapesong=>{
//             mixtapesong.song_id == songid && mixtapesong.mixtape_id == mixtapeid
//             console.log(mixtapesong.id)
//             deleteSong(mixtapesong.id)
//         }))
// }

// function deleteSong(songid){
//     fetch(`http://localhost:3000/mixtape_songs/${songid}`, {
//         method: 'DELETE'
//     })
// }

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
