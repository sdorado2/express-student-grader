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
        <a href="/students/new">
          <button>New Student</button>
        </a>
        <table>
          <tr>
            <th>Student</th>
            <th>Grade</th>
          </tr>
          {students.map((student, index) => {
            console.log(
              "🚀  file: Index.jsx:19  Index  {students.map  num:",
              index
            );
            console.log(
              "🚀  file: Index.jsx:28  {students.map  student:",
              student
            );
            return (
              <tr key={index}>
                <td>
                  <a href={`/students/${index}`}>{student.name}</a>
                </td>
                &nbsp;
                <td>{student.grade}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

module.exports = Index;
