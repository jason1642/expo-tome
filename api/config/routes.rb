Rails.application.routes.draw do

  get 'users', to: 'users#index'
  get 'all-users', to: 'users#getAllUsers'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'test-fetch-api', to: 'users#testFetchApi'
  # Defines the root path route ("/")
  # root "articles#index"


  # get "/users", to: "users#index"
end

