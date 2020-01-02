fetch('http://localhost:3000/mixtapes')
    .then(response=>response.json())
    .then(mixtapes=>mixtapes.map(showMixtapes))

    function showMixtapes(mixtape){
        const mixtapeContainer = document.querySelector('.mixtape-container')
        const mixtapeName = document.createElement('p')
        const crudContainer = document.createElement('div')
        const updateName = document.createElement('button')
        const nameInput = document.createElement('input')
        const deleteButton = document.createElement('button')
        const goHome = document.querySelector('.homepage')
        const homeButton = document.createElement('h5')
        mixtapeName.innerHTML = `<a href="http://localhost:3001/onemixtapeshow.html?id=${mixtape.id}">${mixtape.name}</a>`
        
        // homeButton.className = "home-button"
        // homeButton.innerHTML = `<a href="http://localhost:3001">Go to Homepage</a>`
        // goHome.appendChild(homeButton)
        crudContainer.className = 'crud-container'
        nameInput.type = "text"
        nameInput.name = "name"
        nameInput.placeholder = "e.g. Road Trip, Christmas, etc"
        nameInput.className = "update-mixtape-name"
        updateName.innerText = "Update Mixtape Name"
        deleteButton.innerText = "Delete Mixtape"
        deleteButton.addEventListener('click', () => {
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