import React from "react";
import "./datlich.css";

class datlich extends React.Component {
  render() {
    return (
      <>
        <form className="datlich">
          <label for="fname">Tên người mẫu: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br></br>
          <label for="fname">Tên thợ chụp: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br></br>
          <label for="fdate">Ngày hẹn:</label>
          <br />
          <input type="text" id="fngay" name="fngay" />
          <br />
          <label for="fdiadiem">Địa điểm:</label><br/>
          <input type="text" id="fdiadiem" name="fdiadiem" />
          <br/>
          <label for="fchude"> Chủ đề:</label>
          <br />
          <input type="text" id="fchude" name="fchude" />
          <br />
          <label for="fmotachude">Mô tả chủ dề:</label>
          <br />
          <textarea id="fmotachude" name="fmotachude" />
          <br />
          <input type="submit" value="Đặt lịch" />
        </form>
      </>
    );
  }
}
export default datlich;
