class TripsController < ApplicationController
  def index
    if params[:user_id]
      render json: Trip.where(user_id: params[:user_id])
    else
      render json: {message: 'Error. User ID Required.'}, status: 404
    end
  end

  def recent
    render json: Trip.last
  end
end
