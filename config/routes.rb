Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      
      resources :users, only: [:create] do
        resources :notes, only: [:index]
        resources :notebooks, only: [:index]
      end

      resource :session, only: [:destroy, :create]
      resources :notes, only: [:show, :delete, :create, :edit]
      resources :notebooks, only: [:show, :delete, :create, :edit]
      # resources :tags, only: [:show, :delete, :new, :create]
    end

      
end
