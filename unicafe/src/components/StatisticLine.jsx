import React from "react";

export default function StatisticLine({ text, value }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "20%" }}>
      <tbody>
        <tr>
          <td style={{ width: "50%" }}>{text} </td>
          <td style={{ width: "50%" }}>{value}</td>
        </tr>
      </tbody>
    </table>
  );
}
