import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table, Button, Icon, Spin } from 'antd';
import { formatCreatedAt } from '../../utils/time';
import GotoButton from '../../components/common/GotoButton';


class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { containers } = this.props.container;
    const columns = [
      {
        title: 'ID',
        render: (t, r, i) => {
          return r.Id.substr(0, 12);
        }
      },
      {
        title: 'Name',
        render: (t, r, i) => {
          return r.Name.split('/')[1];
        }
      },
      {
        title: 'Image',
        render: (t, r, i) => {
          return r.Image;
        }
      },
      {
        title: 'Created',
        dataIndex: 'Created',
        render: (t, r, i) => {
          return formatCreatedAt(r.Created);
        }
      },
      {
        render: (t, r, i) => {
          const id = t.Id;
          return <GotoButton
            type="primary"
            url={`/container/detail/${id}`}
            text="Detail"
          />
        }
      },
    ];

    return (
      <div className='content-inner'>
        <GotoButton
          url="/container/run"
          text="Run a container"
          type="primary"
        />
        <br/>
        <Table
          columns={columns}
          dataSource={containers}
          rowKey={record => record.Id}
          loading={this.props.loading.effects['container/getContainers']}
        />
      </div>
    );
  }
}


export default connect((state) => (state))(List);
