import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table, Button, Icon } from 'antd';


class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { nodes } = this.props.node;

    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
      },
      {
        title: 'Hostname',
        render: (t, r, i) => {
          return r.Description.Hostname;
        }
      },
      {
        title: 'Engine',
        render: (t, r, i) => {
          return r.Description.Engine.EngineVersion;
        }
      },
      {
        title: 'Role',
        render: (t, r, i) => {
          return r.Spec.Role;
        }
      },
      {
        title: 'Address',
        render: (t, r, i) => {
          return r.Status.Addr;
        }
      },
      {
        title: 'State',
        render: (t, r, i) => {
          return r.Status.State;
        }
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
          dataSource={nodes}
          loading={this.props.loading.effects['node/getNodes']}
        />
      </div>
    );
  }
}


export default connect((state) => (state))(List);
