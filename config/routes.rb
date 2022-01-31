Rails.application.routes.draw do
  resources :categories
  resources :complaints, only: [:index, :create, :show]
  resources :locations
  resources :users, only: [:index, :create, :destroy]
  
  #endoints:
  get "/me", to: "users#show"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  post "/signup", to: "users#create"

  get '/complaints', to: 'complaints#index'
  post "/complaints/new", to: "complaints#create"
  get '/complaints/:id', to: 'complaints#show'
  patch "/complaints/:id", to: "complaints#update"
  delete "/complaints/delete", to: "complaints#destroy"

  get "categories", to: "categories#index"
end
