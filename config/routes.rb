Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "api/auth"
  namespace :api do
    resources :board_games do
      resources :game_sessions
      resources :users
    end
    resources :users do
      resources :board_games
      resources :friends
    end
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get "*other", to: "static#index"
end
