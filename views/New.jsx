const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/students" method="POST">
          Student Name : <input type="text" name="name" />
          <br />
          Student Grade : <input type="number" min="1" name="grade" />
          <br />
          <input type="submit" value="Enter Student" />
        </form>
      </div>
    );
  }
}

module.exports = New;
