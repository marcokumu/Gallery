Rails.application.routes.draw do
  get "/me", to: 'users#show'
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'

  get "/galleries/:id/pieces", to: 'pieces#index_gallery'
  get "/users/:id/pieces", to: 'pieces#index_user'
  

  resources :pieces

  resources :users, only: [:show, :create, :destroy, :index] do
    resources :pieces, only: [:index]
  end

  resources :galleries, only: [:index, :show] do
    resources :pieces, only: [:index]
  end

end
