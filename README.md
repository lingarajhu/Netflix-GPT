# Netflix Clone with GPT Search

A modern, feature-rich streaming platform frontend built with React.js and enhanced with GPT-powered search.

## 🚀 Features

- **User Authentication**: Secure SignIn/SignUp with Firebase
- **Dynamic Content**: Main movie showcase with autoplay trailer
- **Personalized Watch List**: Add and manage favorite movies
- **GPT-Powered Search**: Intelligent movie recommendations
- **Multi-language Support**: Enhanced accessibility for diverse users
- **Responsive Design**: Seamless experience across devices

## 🛠️ Technologies Used

- React.js
- Redux for state management
- Tailwind CSS for styling
- Firebase for authentication
- TMDB API for movie data
- GROQ for fast GPT inferencing

## 🏗️ Project Structure

- `src/components/`: Reusable React components
- `src/hooks/`: Custom hooks for API calls and data fetching
- `src/utils/`: Utility functions and constants
- `src/store/`: Redux store configuration and slices

## 🔥 Key Components

- `Header`: Navigation and user profile
- `MainContainer`: Featured movie with trailer
- `SecondaryContainer`: Movie lists by category
- `GPTSearch`: AI-powered movie search and recommendations
- `MovieList`: Reusable component for displaying movie data

## 💻 Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables for Firebase and TMDB API
4. Run the development server: `npm start`

## 🌐 groq Setup

```JavaScript
    // when you click the search button it triggers this function
    const handleGPTSearch = async () => {
    
    // promt givig style so that we dont need any other information but just movie names....
    const gptPromt =
      "Suggest some movies for the query " +
      searchName.current.value +
      ". only give me names of 10 movies, comma seoerated like the Example results given ahead. Example results: [IronMan, Goolmal, Hitman, Thor, King kong] in array fromate. Keep in mind results must look like Example results noting more than that.";

    const gptResults = await groq.chat.completions.create({
      messages: [{ role: "user", content: gptPromt }],
      model: "llama3-8b-8192",
    });
    
    
// removig some messages given by the groq lpu... 
    const gptMovies = gptResults?.choices[0]?.message?.content.split("\n\n");
    const gptMoviesV1 = gptMovies[1];
    const gptMoviesV2 = gptMoviesV1.split(", ");
    const promiseData = gptMoviesV2.map((movie) => searchMoviesTMDB(movie));

// promiseData has array of promises [prom1, prom2, prom3, prom4] Promise.all()
// .....     waits for all promises to resolve the code continues...

    const resolvedTMDBData = await Promise.all(promiseData);
    dispatch(
      addGptMovies({ movieNames: gptMoviesV2, movieResults: resolvedTMDBData })
    );
  };


```

## Home page
![Screenshot (74)](https://github.com/lingarajhu/Netflix-GPT/assets/159787794/5f474ad9-e8e0-4197-85a4-4d2e5b1a60ce)

## Movie Category 
![Screenshot (76)](https://github.com/lingarajhu/Netflix-GPT/assets/159787794/c19263b3-097a-4510-8480-5073ab00ec6b)

## GPT-Search results list
![Screenshot (78)](https://github.com/lingarajhu/Netflix-GPT/assets/159787794/70fb2a29-6674-4853-a41b-024fee21f796)

## Implementation.

- Create React App
- Configures tailwindCSS
- SignIn/SignUp Form
- Header / LogIn Component
- Routing
- Email and Password Validation
- Authentication
- Firebase installation and Setup
- Deploying our app to production
- SignIn and SignUp Authentication
- Create signUp user account
- Implemented signIn user api
- Created redux Store with userSlice
- Implemented Sign Out
- Updated profile
- BugFix: SignUp user displayName and profile pitcure
- BugFix: If the user is not logged in do not navigate it to /browser vise versa
- Unsubscribe the onAuthStateChanged when the component will unmount
- Add hardcoaded values to the constants file
- Created coustome hooks for fetching the movie title and discription and for fetching the trailer of the video
- Created the new slice for storing the movie data
- Created the Main movie container component and updated the css
- Embeded the youtube video and make it autoplay and mute
- Created Secondary Container which stores the all the movie lists
- Added popular, upcoming, toprated, now streaming movielists fetched the data for each and updated the slice by creating the reducer function for each movie lists
- Created the movie card and added the add button to card div
- Created the watch list section upon clicking the add button in the card section till will update the watchList and also updated the same data to store
- Created the coustome hooks for fetching the data for different categories of movies
- Changed the movie list image type
- Created the new reducer function to play which ever movie trailer that user wish
- Created the new component for List of Trailers
- Updated the css and made lots of changes in store
- Created the GPT search page
- Created search bar and search section in gpt search page
- Created multi-language feature in our app
- Integrated the GPT feature into the app
- Used groq which an amazing Fastest LPU[language processing unit] inferencing engine which gives the quick responces much more faster than other LLM's, 300 tokens per second.
- Created new component as gptComponent added the search feature in it for movie results.
- Fetched the movie data for the movies recomended form GPT using TMDB search API.
- Created the new Slice called GPTSlice for storing the GPT data with the help of redux store.
- By creating the another component displayed the recomeded movies.
- Implemented the modular coding.
- Reused the MovieList component for displaying the movie data. Reusability of the component.

## Features

- Login/SignUp
  - Sign In/SignIn Form
  - redirect to Browser
- Browser page (after authentication)
  - Header
  - Main Movies
    - Tailer in Background
    - Title and Description
    - Movies Suggestion
      - Movies List
      - x-axis scroll
- NetflixGPT
  - Secrch bar
  - Movie Suggestions
