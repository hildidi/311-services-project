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


  post "/complaints/new", to: "complaints#create"
  patch "/complaints/:id", to: "complaints#update"

  
end
