import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table, Button, Icon, Spin } from 'antd';
import GotoButton from '../../components/common/GotoButton';


class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { networks } = this.props.network;
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
          return r.Name;
        }
      },
      {
        title: 'Containers',
        render: (t, r, i) => {
          if (!r.Containers) {
            return null;
          }
          return Object.keys(r.Containers).length;
        }
      },
      {
        title: 'Driver',
        render: (t, r, i) => {
          return r.Driver;
        }
      },
      {
        title: 'Gateway',
        render: (t, r, i) => {
          return r.IPAM.Config.length ? r.IPAM.Config[0].Gateway : null;
        }
      },
      {
        title: 'Scope',
        render: (t, r, i) => {
          return r.Scope;
        }
      },
      {
        render: (t, r, i) => {
          const id = t.Id;
          return <GotoButton
            type="primary"
            url={`/network/edit/${id}`}
            text="Edit"
          />
        }
      },
    ];

    return (
      <div className='content-inner'>
        <GotoButton
          url="/network/create"
          text="Create Network"
          type="primary"
        />
        <br/>
        <Table
          columns={columns}
          dataSource={networks}
          loading={this.props.loading.effects['network/getNetworks']}
        />
      </div>
    );
  }
}


export default connect((state) => (state))(List);
