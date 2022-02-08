Rails.application.routes.draw do
  resources :categories
  resources :complaints
  resources :locations
  resources :users, only: [:create, :show]
  
  #endoints:
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  post "/signup", to: "users#create"

  # get '/complaints', to: 'complaints#index'
  post "/complaints/new", to: "complaints#create"
  patch "/complaints/:id", to: "complaints#update"
  # get '/complaints/:id', to: 'complaints#show'
  # delete "/complaints/:id", to: "complaints#destroy"

  # get "categories", to: "categories#index"
  
end
