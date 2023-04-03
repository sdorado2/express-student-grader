const React = require("react");

class Show extends React.Component {
  render() {
    const { student } = this.props;
    console.log("🚀  file: Show.jsx:6  Show  render  student:", student);

    return (
      <div>
        <h1>{student.name}</h1>
        <hr />
        <h4>GRADE</h4>
        <span>{student.grade}</span>
        <hr />
        <a href="/students">
          <button>BACK</button>
        </a>
      </div>
    );
  }
}

module.exports = Show;
