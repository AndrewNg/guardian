class TripsController < ApplicationController
  def index
    if param[:user_id]
      render json:
    else
      render json: {message: 'Error. User ID Required.'}, status: 404
    end
  end
end
