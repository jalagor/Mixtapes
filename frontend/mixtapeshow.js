fetch('http://localhost:3000/mixtapes')
    .then(response=>response.json())
    .then(mixtapes=>mixtapes.map(showMixtapes))

    function showMixtapes(mixtape){
        const mixtapeContainer = document.querySelector('.mixtape-container')
        const mixtapeName = document.createElement('h3')
        mixtapeName.innerHTML = `<a href="http://localhost:3001/onemixtapeshow.html?id=${mixtape.id}">${mixtape.name}</a>`
        mixtapeContainer.appendChild(mixtapeName)
    }