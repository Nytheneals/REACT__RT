////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Render a tab for each country with its name in the tab
// - When you click on a tab, make it appear to be active while the others
//   appear inactive
// - Render the correct content for the selected tab in the panel
//
// Got extra time?
//
// - Make <Tabs> generic so that it doesn't know anything about
//   country data (Hint: good propTypes help)
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

const styles = {};

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

class Tabs extends React.Component {
  render() {
    return (
      <div className="Tabs">
        {this.props.countries.map((country, index) => (
          <div className="Tab" style={styles.activeTab}>
            {country.name}
          </div>
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          id: 1,
          name: "USA",
          description: "Land of the Free, Home of the brave"
        },
        {
          id: 2,
          name: "Brazil",
          description: "Sunshine, beaches, and Carnival"
        },
        { id: 3, name: "Russia", description: "World Cup 2018!" }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs countries={this.state.countries} />
      </div>
    );
  }
}

// const DATA = [
//   {
//     id: 1,
//     name: "USA",
//     description: "Land of the Free, Home of the brave"
//   },
//   {
//     id: 2,
//     name: "Brazil",
//     description: "Sunshine, beaches, and Carnival"
//   },
//   { id: 3, name: "Russia", description: "World Cup 2018!" }
// ];

ReactDOM.render(<App />, document.getElementById("app"), function() {
  require("./tests").run(this);
});
