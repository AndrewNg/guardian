Rails.application.routes.draw do
  root to: 'application#home'

  resources :users, except: [:new, :edit, :update]
  resources :trips, only: [:index] do
    collection do
      get :recent
    end
  end
end
