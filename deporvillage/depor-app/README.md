## I used CREATE-REACT-APP to make this Order Exporer.

Run `npm install`, then:

### `npm start`

to view the app

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### Notes on hiding API keys

I used an npm module call dotenv which allows me to store api keys in a file called .env, in the root folder. Then I call the variable I want from that file using:
`require("dotenv").config();` in the index.js
then `let unsplashApiKey = process.env.REACT_APP_UNSPLASH;` where you want to call the api key.

I must use REACT*APP* before the name of the variable.

Inside Netlify, I create an environment variable, using `REACT_APP_UNSPLASH` as the key, and the api key, as the key. This will then call this variable on the build, in Netlify.
