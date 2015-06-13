class ApplicationController < ActionController::API
  def home
    render text: "Hi Guys".downcase
  end
end
