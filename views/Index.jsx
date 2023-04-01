const React = require("react");

class Index extends React.Component {
  render() {
    const students = this.props;
    return (
      <div>
        <h1>{students.name}</h1>
      </div>
    );
  }
}

module.exports = Index;
