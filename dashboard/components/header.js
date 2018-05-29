import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Input, Menu, Dropdown, Icon } from 'antd';
import { Popover, Button } from 'antd';
import NoticeIcon from './noticeicon';

let siteRoot = window.app.config.siteRoot
let mediaUrl = window.app.config.mediaUrl
let logoPath = window.app.config.logoPath
let siteTitle = window.app.config.siteTitle
let logoWidth = window.app.config.logoWidth
let logoHeight = window.app.config.logoHeight

const Search = Input.Search;
let logoUrl = mediaUrl + logoPath

class Header extends Component {

  render() {

     const menu = (
      <Menu>
        <Menu.Item>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Icon type="question-circle-o"/>帮助
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    )

    return (
        <div id="header" className="d-flex" style={{ backgroundColor: '#fff' }}>
          <a href={ siteRoot } id="logo">
            <img src={ logoUrl } title={ siteTitle } alt="logo" width={ logoWidth } height={ logoHeight } />
          </a>
          <div className="common-toolbar">
           <div id="top-search-form" className="search-form">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 150, paddingRight: 0 }}
            />
           </div>
            <NoticeIcon />
            <div id="account">
              <Dropdown placement="bottomRight" overlay={menu}>
                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large"/>
              </Dropdown>
              <span className="icon-caret-down"></span>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
