import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table } from 'antd';
import GotoButton from '../../components/common/GotoButton';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { services } = this.props.service;

    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
      },
      {
        title: 'Name',
        render: (t, r, i) => {
          return r.Spec.Name;
        }
      },
      {
        title: 'Image',
        render: (t, r, i) => {
          return r.Spec.TaskTemplate.ContainerSpec.Image.split('@')[0];
        }
      },
      {
        title: 'CreatedAt',
        dataIndex: 'CreatedAt',
        key: 'CreatedAt'
      },
      {
        render: (t, r, i) => {
          const id = t.ID;
          return <GotoButton
            type="primary"
            url={`/service/edit/${id}`}
            text="Edit"
          />
        }
      },
    ];

    return (
      <div className='content-inner'>
        <GotoButton
          url="/service/create"
          text="Create Service"
        />
        <br/>
        <Table
          columns={columns}
          dataSource={services}
          loading={this.props.loading.effects['service/getServices']}
        />
      </div>
    );
  }
}

export default connect((state) => (state))(List);
