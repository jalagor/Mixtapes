# Mixtapes
Our project consists of a rails backend with a mixtape and song database seeded from the [Napster API](https://developer.napster.com/). Within the UI, users can create a Mixtape, add songs to the mixtape, delete a mixtape, change the name of a mixtape and preview a sound sample of the available songs.  
 
## Getting Started 
To run our app, fork or clone the repo into a local directory, and set up the backend by running the following in your terminal within the backend directory: 
```
bundle install
``` 
```
rails db:migrate
``` 
```
rails db:seed
``` 
 
To run the backend, run the following in the terminal: 
```
rails s 
``` 
 
  
Once your backend is running, open the frontend directory and run: 
```
lite-server
``` 
 
if you do not have lite-server, you can install it [here.](https://www.npmjs.com/package/lite-server
) 
 
 
## Using the App 
 
Using the app is fairly intuitive, the home page has a list of songs that can be scrolled through and previewed by clicking on the play and pause buttons. Mixtapes can be viewed individually by clicking the link on the name of each mixtape. Mixtape names can be editted by typing the desired name change in the input field and clisking update. Mixtapes can be deleted by clicking the delete button.  
Within the mixtape page, songs can be searched dynamically in the input field and added to a mixtape by clicking the + button. 
