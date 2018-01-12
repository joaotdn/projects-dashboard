import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DashboardContent extends PureComponent {
    render () {
        return (
            <div>
                {this.props.emitter_id}
            </div>
        );
    }
}

DashboardContent.propTypes = {
  emitter_id: PropTypes.string
};

export default DashboardContent;