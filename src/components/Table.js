import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  color: grey;
  font-weight: 700;
  border: none;
  border-collapse: collapse;
  td {
    padding-top: 15px;
    padding-right: 50px;
  }
  td:nth-child(2) {
    color: white;
  }
`;

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <tbody>
      {data.map((item) => (
        <tr>
          {titles.map((title) => (
            <td>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);

