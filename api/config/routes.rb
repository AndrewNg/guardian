Rails.application.routes.draw do
  root to: 'application#home'

  resources :users, except: [:new, :edit, :update]
  resources :trips, only: [:index]
end
