const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/students" method="POST">
          Student Name : <input type="text" name="Student" />
          <br />
          Student Grade : <input type="text" name="Grade" />
          <br />
          <input type="submit" value="Enter Student" />
        </form>
      </div>
    );
  }
}

module.exports = New;
