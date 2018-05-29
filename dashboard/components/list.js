import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { List, Card, Avatar,Button, Spin } from 'antd';

class Activities extends Component {
  state = {
    loading: true,
    loadingMore: true,
    showLoadingMore: true,
  }

  render() {
    const { loading, loadingMore, showLoadingMore } = this.state;
    const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
    const loadMore = () => {
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    }
    return(
      <div style={{ padding: '30px', height: '100%' }}>
        <Card title="Activities">
        <List
          loadMore={loadMore}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
              />
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        </Card>
      </div>
    )
  }
}

export default Activities;
