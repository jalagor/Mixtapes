fetch('http://localhost:3000/songs')
    .then(response=>response.json())
    .then(songs=>songs.map(songName))

    function songName(song){
            const songContainer = document.querySelector('.song-container')
            const songName = document.createElement('h3')
            const songSearch = document.createElement('form')
            const songInput = document.createElement('input')
            songName.innerText = song.title
            songName.className = "song-name"

            songSearch.method = "GET"
            songSearch.action = "localhost:3001"
            songInput.type = "text"
            songInput.class = "search"
            songContainer.appendChild(songName)
    }