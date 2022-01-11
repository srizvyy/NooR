# NooR

## What is NooR?

• I created NooR for people to share their projects and resume templates and receive feedback from other users. I hope to build a community of like-minded individuals who like helping others.

## Technologies

here are the technologies utilized for NooR:

• Frontend: React, Three.js, CSS - material ui/styled

• Backend: Ruby, Rails, PostgreSQL

## Other Dependencies

This project was built using Ruby version 2.7.4. To install the required gems, navigate to the root directory of this project and run this command:

bundle install
After installing the Ruby dependencies, install the Node modules by running this command in the root directory.

npm install --prefix client
Additional Steps for Local Install
To run this app locally, PostgreSQL will need to be installed. Please follow the official instructions on PostgreSQL's site to install.

Start your local PostgreSQL server. Once running, navigate to the root directory and run these commands to create the database and run the migrations:

rails db:create
rails db:migrate

## Running NooR

Once all the dependencies are installed, NooR can be started. First ensure that your local PostgreSQL server is running. Then start the backend by navigating to the root directory in your terminal and running this command:

rails s
Then the frontend can be started. Navigate to the root directory in another terminal window and run this command:

npm start --prefix client
