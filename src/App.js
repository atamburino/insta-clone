// Imports the logo file (SVG) from the path below so it can be used in this component 
import logo from "./assets/images/logo.svg";

// imports the stylesheet from app.css
import "./styles/App.css";

// For React ->>
// The import React here import the core React library
// From the Docs -> This gives gus access to JSX Processing, Hooks in functional components & lifecycle methods.

// For Component ->>
// This is a class that provides the render() method & base for class components
// From the Docs -> State Management with this.state 
import React, { Component } from "react";

// This is a new class named "App" that inherits from React.Component (extends).
// By having a class we get access to features of the react.component in this class we use render()
class App extends Component {

  // Render is called when we need to update the UI / Tell react that we are sending JSX to the DOM.
  render() {

    // Returns JSX for the Dom
    return (

      // This is Div is the main container and the
      // wrapper for to provide the parent element thats
      // required for the return.
      <div className="App">

        {/* Header section  */}
        <header className="App-header">

          {/* renders the imported SVG as an image, alt provides accessibility for readers, and the class name provides the spinning animation  */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* paragraph element used to display text */}
          <p>
            {/* Code is used to style code as text */}
            Edit <code>src/App.js</code> and save to reload.
          </p>

          {/* anchor tag for react site */}
          <a
          // Styles
            className="App-link"

            // Link to site
            href="https://reactjs.org"

            // Opens link in next tab
            target="_blank"

            // Had to look this one up --> adds security for _blank links
            rel="noopener noreferrer"
          >
            {/* Actual displayed text for link */}
            Learn React

            {/* Closing tags */}
          </a>
        </header>
      </div>
    );
  }
}

// exports the app component 
// Just like how we export in jest testing this allows us to import this component into other files as needed. 
export default App;
