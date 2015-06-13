Rails.application.routes.draw do
  resources :users, except: [:update]
  resources :trips, only: [:index]
end
