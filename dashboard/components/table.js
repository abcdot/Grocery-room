import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Card, Avatar } from 'antd';

class Activities extends Component {

  render() {
    const dataSource = [{
      key:'1',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Delete 'demo.md'",
    }, {
      key: '2',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '3',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '5',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '6',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '7',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '8',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  />,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }, {
      key: '9',
      avatar: <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>,
      name: 'test',
      time: '2018-5-28',
      libraries: 'demo',
      operation: "Add or Modified 'demo.md'",
    }];

    const columns = [{
      title: '',
      dataIndex: 'avatar',
      key: 'avatar',
      width: '5%',
    }, {
      title: 'USER',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
    }, {
      title: 'TIME',
      dataIndex: 'time',
      key: 'time',
      width: '20%',
    }, {
      title: 'LIBRARIES',
      dataIndex: 'libraries',
      key: 'libraries',
      width: '20%',
    }, {
      title: 'OPERATION',
      dataIndex: 'operation',
      key: 'operation',
      width: '40%',
    }];
    return(
      <div style={{ padding: '30px', height: '100%' }}>
        <Card title="Activities">
          <Table
            dataSource={dataSource}
            columns={columns}
            loading={false}
          />
        </Card>
      </div>
    )
  }
}

export default Activities;
