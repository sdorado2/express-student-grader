const React = require("react");

const flexStudent = {
  display: `flex`,
};
class Index extends React.Component {
  render() {
    const { students } = this.props;

    return (
      <div>
        <h1>Student Grade Book</h1>
        <table>
          <tr>
            <th>Student</th>
            <th>Grade</th>
          </tr>
          {students.map((student) => {
            return (
              <div>
                <tr>
                  <td>{student.name}</td>
                  &nbsp;
                  <td>{student.grade}</td>
                </tr>
              </div>
            );
          })}
        </table>
      </div>
    );
  }
}

module.exports = Index;
