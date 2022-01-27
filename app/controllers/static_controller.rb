class StaticController < ApplicationController
  def index
    render inertia: 'static/Index', props: {
      message: 'Hello from Static index'
    }
  end

  def terms
  end

  def privacy
  end

  def faq
  end
end
