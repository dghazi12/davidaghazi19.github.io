import React from "react";

function ResultList(props) {
  return (

    <table className="table">

      {props.results.map(result => (

        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John/td >
            <td>Doe</td>
            <td>40</td>
          </tr>
        </table>

      ))}

    </table>

  );
}

export default ResultList;