SETUP🚀:
1.Install react app using create-react-app (CRA)
npx create-react-app netflix-gpt

2.Create .env file and put configure
REACT_APP_BASE_URL = YOUR_APPLICATION_BASE_URL; 
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_HERE;

3.Install and init tailwind css
npm install -D tailwindcss
npx tailwindcss init

4.Configure tailwind css in your project
npx tailwindcss init command will 
create a file tailwind.config.js 
in your project's root directory. 
Open tailwind.config.js and replace 
all content with below code.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

5.Add the @tailwind directives for each of Tailwind’s layers to 
your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

6.Now you created a react app with tailwind css successfully.
 Now run the below command on your terminal 
to start your local development server.
npm start


FEATURES🚀:
Modules (Pages)
   Module 1 - Authentication
       Feature 1 - Sign In
       Feature 2 - Sign up
   Module 2 - Browse
       Feature 1 - Movie Component
            Movie Trailer
            Movie Details
       Feature 2 - Secondary Component
            Movie Lists
                  Now Playing Movies
                  Popular Movies
                  Trending Movies
                  Top-rated Movies
                  Upcoming Movies
   Module 3 - Movie Details
   Module 4 - Movie Watch
   Module 5 - GPT powered Search
        Feature 1 - Search
        Feature 2 - Recommendation

DEVELOPMENT SEQUENCE🚀:
  Create React App
  Configured TailwindCSS
  Header
  Routing of App
  Login Form
  Sign up Form
  Form Validation
  useRef Hook
  Firebase Setup
  Deploying our app to production
  Create SignUp User Account
  Implement Sign In user Api
  Created Redux Store with userSlice
  Implemented Sign out
  Update Profile
  BugFix: Sign up user displayName and profile picture update
  BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
  Unsubscibed to the onAuthStateChanged callback
  Add hardcoded values to the constants file
  Regiter TMDB API & create an app & get access token
  Get Data from TMDB now playing movies list API
  Custom Hook for Now Playing Movies
  Create movieSlice
  Update Store with movies Data
  Planning for MainContauiner & secondary container
  Fetch Data for Trailer Video
  Update Store with Trailer Video Data
  Embedded the Yotube video and make it autoplay and mute
  Tailwind Classes to make Main Container look awesome
  Build Secondary Component
  Build Movie List
  Build Movie Card
  TMDB Image CDN URL
  Made the Browsre page amazing with Tailwind CSS
  usePopularMovies Custom hook
  GPT Search Page
  GPT Search Bar (Multi-language Feature in our App)
  Get Open AI Api Key
  Gpt Search API Call
  fetched gptMoviesSuggestions from TMDB
  created gptSlice added data
  Resused Movie List component to make movie suggestion container
  Memoization
  Added .env file
  Adding .env file to gitignore
  Made our Site Responsive

#FEEL FREE TO CONTRIBUTE


