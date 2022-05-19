

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

  
  def testFetchApi

    require "rest-client"

    puts "TESTING API FROM RAILS"

    testResult = RestClient.get('https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f',
      {
        :accept => :json,
       "X-RapidAPI-Host" => 'yahoo-weather5.p.rapidapi.com',
       "X-RapidAPI-Key" => 'd5a52648b8mshb8acebbe7a07d99p15602bjsn20ab604f4606'
        })

      # rescue "THERE WAS AN ERROR"
    render json: testResult
      

    return 'SUCCESS', status: :ok







  end


end
