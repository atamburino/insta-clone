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
        <p>This is life</p>
      </div>
    );
  }
}

// exports the app component 
// Just like how we export in jest testing this allows us to import this component into other files as needed. 
export default App;
