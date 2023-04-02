const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/students" method="POST">
          <input type="text" name="Student"></input>
          <input type="text" name="Grade"></input>
          <input type="submit" value="Enter Student"></input>
        </form>
      </div>
    );
  }
}

module.exports = New;
