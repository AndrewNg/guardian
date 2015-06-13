class UsersController < ApplicationController
  def show
    render json: User.find(params[:id])
  end

  def index
    render json: User.all
  end

  def create
    render json: User.create(name: params[:name], parent: params[:parent])
  end

  def destroy
    User.find(params[:id]).destroy!
    render json: {message: 'success'}
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
