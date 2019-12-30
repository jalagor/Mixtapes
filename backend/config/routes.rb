Rails.application.routes.draw do
  resources :mixtape_songs
  resources :mixtapes
  resources :songs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
