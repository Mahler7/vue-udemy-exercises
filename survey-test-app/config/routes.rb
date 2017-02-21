Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :surveys
    end
  end
  get '/surveys' => 'surveys#index'
end
