# Quizzical
A simple implementation of the Open Trivia DB API

## Dependencies
Made in React, in order to play around with using conditional rendering to imitate page routing when only two pages are needed. Uses the 'he' package for HTML entities, as well as CLSX.

## Files
Entry into main.jsx which directly renders App.jsx.

* App.jsx - Main page. Holds in state an object describing various page options (currently only the page name and number of questions the user selected). Defines event listener functions to update the page. Finally, conditionally renders one of the main components depending on which page name is currently in state.

* Title.jsx - Takes a callback as a prop to use as the button's onclick event listener. Holds the current number of questions selected by the user in state. Defines a function to call the passed-in callback. Renders the game's title and a start button, with an input to decide between 1 and 50 (the API maximum) questions.

* Quiz.jsx - Quiz component. Receives a callback to return to the title page and the number of questions to use. Holds the array of question objects in state. Renders Question components for each object.

* Question.jsx - Question component. Renders the provided question object and conditionally alters the classnames as an answer is clicked.

* utils.js - Helpers. Exports a function to shuffle array items and a function to fetch a list of questions from the API.

* index.css - Stylesheet.