Rails.application.routes.draw do
  defaults export: true do
    root 'static#index'
    get 'terms', to: 'static#terms'
    get 'privacy', to: 'static#privacy'
    get 'faq', to: 'static#faq'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
  end
end
