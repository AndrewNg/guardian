class UsersController < ApplicationController
  def show
    render json: User.find(params[:id])
  end

  def index

  end

  private

  def user_params
    params.require(:user).permit(:name, )
  end
end
