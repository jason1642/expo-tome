class UsersController < ApplicationController
  def index
    

    render json: {
      aname: 'my value'
    }, status: :ok
  end


  def getAllUsers 

    render json: [
      {valueOne: "somethign"},
      {valueTWO: "another"}
    ]
    puts'this is a string'

  end

end
