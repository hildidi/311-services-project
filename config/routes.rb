Rails.application.routes.draw do
  resources :categories
  resources :complaints
  resources :locations
  resources :users, only: [:create, :show]
  
  #endoints:x
  get "/user_complaints", to: "complaints#display_user_complaints"
  get "/me", to: "users#show"

  post "/categories/new", to: "categories#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  post "/signup", to: "users#create"

  post "/complaints/new", to: "complaints#create"
  patch "/complaints/:id", to: "complaints#update"

  
end
