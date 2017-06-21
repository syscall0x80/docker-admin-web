import React, { Component, PropTypes } from 'react';
import { connect } from 'dva'
import { Table, Button, Icon, Spin } from 'antd';
import GotoButton from '../../components/common/GotoButton';


class List extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { volumes } = this.props.volume;
    const columns = [
      {
        title: 'ID',
        render: (t, r, i) => {
          return r.Id.substr(0, 12);
        }
      },
      {
        render: (t, r, i) => {
          const id = t.Id;
          return <GotoButton
            type="primary"
            url={`/volume/edit/${id}`}
            text="Edit"
          />
        }
      },
    ];

    return (
      <div className='content-inner'>
        <GotoButton
          url="/volume/create"
          text="Create Volume"
          type="primary"
        />
        <br/>
        <Table
          columns={columns}
          dataSource={volumes}
          loading={this.props.loading.effects['volume/getVolumes']}
        />
      </div>
    );
  }
}


export default connect((state) => (state))(List);
