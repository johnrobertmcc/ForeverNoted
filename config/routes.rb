Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      
      resources :users, only: [:create] do
        resources :notebooks, only: [:index]
        resources :notes, only: [:index]
      end

      resource :session, only: [:destroy, :create]
      resources :notes, only: [:show, :destroy, :create, :update]
      resources :notebooks, only: [:show, :destroy, :create, :update] do 
        resources :notes, only: [:index, :update]
      end
      # resources :tags, only: [:show, :delete, :new, :create]
    end

      
end
