fetch('http://localhost:3000/songs')
    .then(response=>response.json())
    .then(songs=>songs.sort(aToZ).map(songNames))

function aToZ(a, b){
        if (a.title < b.title){return -1} 
        else if (a.title > b.title){return 1}
        else {return 0}
}

function aToZMixtape(a, b){
    if (a.name < b.name){return -1} 
    else if (a.name > b.name){return 1}
    else {return 0}
}

    function songNames(song){
            const songContainer = document.querySelector('.song-list')
        //     const browseSongs = document.createElement('h3')
            const songList = document.createElement('ul')
            const songName = document.createElement('li')
            const songSearch = document.createElement('form')
            const songInput = document.createElement('input')
            const playButton = document.createElement('button')
            const pauseButton = document.createElement('button')

        //     browseSongs.innerText = "Browse Song Library"
            songName.innerText = `${song.title} - ${song.artist}    `
            songName.className = "song-name"
            songList.className = "class-list"

            songSearch.method = "GET"
            songSearch.action = "localhost:3001"
            songInput.type = "text"
            songInput.class = "search"

            playButton.type = "button"
            playButton.className = "play-button"
            playButton.addEventListener('click', ()=>{
                playAudio(song)})
            pauseButton.type = "button"
            pauseButton.className = "pause-button"
            pauseButton.addEventListener('click', () => {
                pauseAudio(song)})
            
        //     songList.append(songName)
        //     sortList('class-list')
            songName.append(playButton, pauseButton)
            songContainer.appendChild(songName)
        //     console.log(songName.innerText)
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


// function togglePlay(song){
//     sound.src = `${song.preview}`
//     if (isPlaying){
//         sound.pause()
//     }
// }

// sound.onplaying = function(){
//     isPlaying = true;
// }
// sound.onpause = function(){
//     isPlaying = false;
// }

// function pauseAudio(song){
//     sound.pause()
// }

fetch('http://localhost:3000/mixtapes')
    .then(response=>response.json())
    .then(mixtapes=>mixtapes.sort(aToZMixtape).map(mixtapeNames))

function mixtapeNames(mixtape){
        const mixtapeContainer = document.querySelector('.mixtape-names')
        const mixtapeName = document.createElement('p')
        const crudContainer = document.createElement('div')
        const allMixtapes = document.createElement('div')
        const updateName = document.createElement('button')
        const nameInput = document.createElement('input')
        const deleteButton = document.createElement('button')

        mixtapeName.innerHTML = `<a href="http://localhost:3001/onemixtapeshow.html?id=${mixtape.id}">${mixtape.name}</a>`
        mixtapeName.className = 'one-mixtape-container'
        crudContainer.className = 'crud-container'
        nameInput.type = "text"
        nameInput.name = "name"
        nameInput.placeholder = "e.g. Road Trip, Christmas, etc"
        nameInput.className = "update-mixtape-name"
        updateName.innerText = "Update Mixtape Name"
        deleteButton.innerText = "Delete Mixtape"
        deleteButton.className = "delete-button"
        deleteButton.addEventListener('click', () => {
                event.target.parentNode.parentNode.remove()
            deleteMixtape(mixtape.id)
        })
        updateName.addEventListener('click', ()=>{
            updateMixtape(mixtape.id)
        })
        
        crudContainer.append(nameInput, updateName, deleteButton)
        mixtapeName.appendChild(crudContainer)
        mixtapeContainer.appendChild(mixtapeName)
}

function updateMixtape(mixtape){
        const updateName = document.querySelector('.update-mixtape-name')
        const userInput = updateName.value 
        fetch(`http://localhost:3000/mixtapes/${mixtape}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
              },
              body:JSON.stringify({name: userInput })
        })
    }
    
    function deleteMixtape(mixtape){
        fetch(`http://localhost:3000/mixtapes/${mixtape}`, {
            method: 'DELETE'
        })
    }

function sortNames(song){
        // const songArray = []
        songArray.push(song)
        // songArray.sort((a, b) => {(a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})
        // songArray.sort(function(a, b ){
        //         const songA = a.title.toUpperCase()
        //         const songB = b.title.toUpperCase()
        //         if (songA < songB){
        //                 return -1;
        //         }
        //         if (songA > songB){
        //                 return 1;
        //         }
        //         return 0
                // return (songA < songB) ? -1 : (songA > songB) ? 1 : 0
}


// songArray.sort((a, b) => {(a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);})

// console.log(songArray)

// function sortList(songnames){
//         console.log(songnames.childNode)
//         // Array.from(songnames.innerText)
//                 // .sort((a,b) => a.textContent.localCompare(b.textContent))
// } 
function sortList(thing) {
        // const ul = document.getElementsByClassName(thing);

        // console.log(ul)
      
        // Array.from(ul.getElementsByTagName("li"))
        //   .sort((a, b) => a.textContent.localeCompare(b.textContent))
        //   .forEach(li => ul.appendChild(li));
      }
      
//       sortList('class-list');