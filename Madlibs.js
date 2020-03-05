import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        <p>Hello! Please fill in the following fields:</p>
        <br />
        Type your first name:
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <p>What's your favorite color?</p>
        <input
          type="text"
          value={getData("color")}
          onChange={event => setData("color", event.target.value)}
        />
        <p>Type an adjective:</p>
        <input
          type="text"
          value={getData("adjective")}
          onChange={event => setData("adjective", event.target.value)}
        />
        <p>Name any animal:</p>
        <input
          type="text"
          value={getData("animal")}
          onChange={event => setData("animal", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "page2" }]
  },
  page2: {
    content: (getData, setData, setName) => (
      <p>
        <p>{getData("name")}, please fill in the remaining fields:</p>
        <p>Type a plural noun:</p>
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
        <p>Name another animal:</p>
        <input
          type="text"
          value={getData("animal2")}
          onChange={event => setData("animal2", event.target.value)}
        />
        <p>Type an adverb:</p>
        <input
          type="text"
          value={getData("adverb")}
          onChange={event => setData("adverb", event.target.value)}
        />
        <p>Type another noun:</p>
        <input
          type="text"
          value={getData("noun2")}
          onChange={event => setData("noun2", event.target.value)}
        />
        <p>Type one last noun:</p>
        <input
          type="text"
          value={getData("noun3")}
          onChange={event => setData("noun3", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "page3" }]
  },
  page3: {
    content: (
      getData,
      setName,
      setColor,
      setAdjective,
      setAnimal,
      setStore,
      setNoun,
      setAnimal2,
      setAdverb,
      setNoun2,
      setNoun3
    ) => (
      <p>
        {getData("name")}, the {getData("color")}, {getData("adjective")}
        {getData("animal")} took a trip to the local {getData("place")} to buy a
        lifetime supply of
        {getData("color")} {getData("noun")}. Unfortunately for{" "}
        {getData("name")}, when they inspected the {getData("noun")}, an awful
        stench filled the air. It reeked of {getData("noun2")} and attracted a
        herd of ravenous {getData("animal2")}s. The sudden stampede{" "}
        {getData("adverb")} crushed {getData("name")} so much they turned into a{" "}
        {getData("noun3")}!
      </p>
    ),
    buttons: [{ label: "Start Over", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
