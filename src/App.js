import React, { Component } from "react";
import "./App.css";
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherStae: "Some other value",
    users: [{ userName: "Jerry" }]
  };

  switchNameHandler = newName => {
    console.log("was clicked");
    // DON'T DO THIS this.state.persons[0].name = "Karen";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangeHandler = e => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: e.target.value, age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  userChangeHandler = e => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 }
      ],
      otherStae: "Some other value",
      users: [{ userName: e.target.value }]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      boxShadow: "1px 2px 3px #aaa",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Jerry")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          I like chicken
        </Person>
        <Person
          click={() => this.switchNameHandler("Tiffany")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>

        <UserInput
          userName={this.state.users[0].userName}
          changeUserName={this.userChangeHandler}
        ></UserInput>
        <UserOutput userName={this.state.users[0].userName}></UserOutput>
        <UserOutput userName={this.state.users[0].userName}></UserOutput>
        <UserOutput userName={this.state.users[0].userName}></UserOutput>
      </div>
    );

    // React.createElement(
    //   "div",
    //   { className: App },
    //   React.createElement("div", { className: App }, "I'm some h1 text")
    // );
  }
}

export default App;
