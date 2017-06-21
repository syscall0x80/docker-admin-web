import React, { Component, PropTypes } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { Button} from 'antd'

class GotoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newContainer: false,
    };
    this.goto = this.goto.bind(this);
  }

  goto = () => {
    this.props.dispatch(routerRedux.push(this.props.url));
  };

  render () {
    return (
      <div>
        <Button
          onClick={() => this.goto()}
          type={this.props.type || 'primary'}
        >
          {this.props.text}
        </Button>
      </div>
    )
  }
}

GotoButton.PropTypes = {
  text: PropTypes.string.required,
  url: PropTypes.string.required,
};

export default connect((state) => (state))(GotoButton);
