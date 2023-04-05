# Phase 3 Flatiron School Project 

## Technologies Used

* Ruby
  * ActiveRecord
  * Sinatra
* React.js
  * React Router

## Installation

* To begin using this application, you first need to fork and clone both this repo and the backend repo which can be found [here](https://github.com/Creasser/Snowboard-Reviewer-Backend)
* Once both repositorys are locally installed and opened on your machine, run ``` bundle install ``` in the backend repo ternmial to install all the backend dependencies for the application. Do the same for the frontend repo, but run ``` npm install ``` instead to download all the frontend dependencies.
* After the dependencies are installed, seed the database by running ``` bundle exec rake db:seed ``` in the backend terminal.
* Then start the server by running ``` bundle exec rake server ```.
* Start the application by running ``` npm start ``` in the frontend repo terminal. After this you are all set to start using the application!

## Frontend User Interactions

* The user will be able to add snowboards to the database through a controlled form
  * When adding the user will input the brand, price, image, directional status, and preferred riding conditiion
    * This will be sent to backend via various localhost/9797 routes
* The user will also be able to make a review for newly added boards and pre-existing boards
  * This will also be sent to the backend via various localhost/9797 routes
* When completeing a review, the user will input a score from 1-10 and add a comment about the board
* The user will be able to sort the boards based on number of reviews, best rating, and price
  * Can sort the boards on the backend, and send a different fetch request on the frontend to the endpoint that has the boards in the desired order
