class UsersController < ApplicationController
  def show
    render json: User.find(params[:id])
  end

  def index
    render json: User.all
  end

  def create

  end

  def destroy
    User.
    render json: {message: 'success'}
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
