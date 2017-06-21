import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table, Button, Icon } from 'antd';


class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { images } = this.props.image;

    const columns = [
      {
        title: 'Name',
        render: (t, r, i) => {
          return r.RepoTags ? r.RepoTags[0] : 'null';
        }
      },
      {
        title: 'ID',
        dataIndex: 'Id',
        render: (t, r, i) => {
          return t.split(':')[1].substr(0, 12);
        },
      },
      {
        title: 'Created',
        render: (t, r, i) => {
          return new Date(r.Created * 1000).toLocaleDateString();
        },
      },
      {
        render: (t, r, i) => {
          return <Button type="primary">修改</Button>
        }
      },
    ];

    return (
      <div className='content-inner'>
        <Table
          columns={columns}
          dataSource={images}
          loading={this.props.loading.effects['image/getImages']}
        />
      </div>
    );
  }
}


export default connect((state) => (state))(List);
