import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  color: grey;
  font-size: 16px;
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
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default TableMarkup