const React = require("react");

class Show extends React.Component {
  render() {
    const { student } = this.props;
    return (
      <div>
        <h1>{student.name}</h1>
      </div>
    );
  }
}

module.exports = Show;
