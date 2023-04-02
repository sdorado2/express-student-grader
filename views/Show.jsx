const React = require("react");

class Show extends React.Component {
  render() {
    const { student } = this.props;
    console.log("🚀  file: Show.jsx:6  Show  render  student:", student);

    return (
      <div>
        <h1>{student.name}</h1>
        <hr />
        <span>{student.grade}</span>
      </div>
    );
  }
}

module.exports = Show;
