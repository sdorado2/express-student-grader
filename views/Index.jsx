const React = require("react");

class Index extends React.Component {
  render() {
    const { students } = this.props;
    console.log("🚀  Index  render  students:", students);

    return (
      <div>
        <h1>{students[1].name}</h1>
      </div>
    );
  }
}

module.exports = Index;
