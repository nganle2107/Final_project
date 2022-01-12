import React from "react";
import "./xemlich.css";

class xemlich extends React.Component {
  render() {
    return (
      <>
        <table>
          <tr>
            <th>Tên người mẫu</th>
            <th>Tên thợ chụp</th>
            <th>Ngày hẹn</th>
            <th>Chủ đề</th>
            <th>Địa điểm</th>
          </tr>
          <tr>
            <td>Mike</td>
            <td>John</td>
            <td>15/01/2022</td>
            <td>Thiên nhiên</td>
            <td>Công viên</td>
          </tr>
        </table>
      </>
    );
  }
}

export default xemlich;
