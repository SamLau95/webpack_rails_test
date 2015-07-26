class ApplicationController < ActionController::API
  include AbstractController::Translation

  def app
    render 'app'
  end
end
