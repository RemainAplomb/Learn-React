## Public

### Initialization/setup

Create public directory:
mkdir public

Navigate to public directory:
cd public

Create the chat-app:
npx create-react-app chat-app

And move everything in ./public/chat-app to ./public/.
Also, after the ./public/chat-app is empty, you can delete it

### Install dependencies

npm install axios styled-components react-router-dom --force

npm install react-toastify

### Install Yarn

Enable corepack:

corepack enable

Install yarn using corepack:
corepack prepare yarn@stable --activate

More info here:
https://yarnpkg.com/getting-started/install

Add dependencies using yarn:
yarn add axios styled-components react-router-dom

edited ./public/src/App.js:
use rfc

Delete from ./public/src/:
App.css
App.test.js
logo.svg
reportWebVitals.js
setupTests.js

Make ./public/src/index.css blank. Delete its content for now

Edit ./public/src/index.js

## Server

### Initialize/setup

mkdir server

npm init

npm install express mongoose nodemon socket.io bcrypt cors dotenv --force

Create index.js

Create .env

### Running server

npm start
