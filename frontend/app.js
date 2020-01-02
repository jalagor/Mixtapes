fetch('http://localhost:3000/songs')
    .then(response=>response.json())
    .then(songs=>songs.map(songName))

    function songName(song){
            const songContainer = document.querySelector('.song-container')
            const songList = document.createElement('ul')
            const songName = document.createElement('li')
            const songSearch = document.createElement('form')
            const songInput = document.createElement('input')
            songName.innerText = song.title
            songName.className = "song-name"
            songList.className = "class-list"

            songSearch.method = "GET"
            songSearch.action = "localhost:3001"
            songInput.type = "text"
            songInput.class = "search"
            songList.appendChild(songName)
            songContainer.appendChild(songList)
    }