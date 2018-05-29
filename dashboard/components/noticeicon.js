import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';

class NoticeIcon extends Component {
  render() {
    return (
      <div id="notifications">
        <Icon type="bell" style={{ fontSize: 18, paddingTop: 5 }} />
      </div>
    );
  }
}

export default NoticeIcon;
