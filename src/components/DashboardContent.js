import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import constants from '../constants';
import 'babel-polyfill';

import ExecutedHours from './ExecutedHours';

class DashboardContent extends PureComponent {
    constructor() {
        super(...arguments);
        this.state={
            emitter: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        const prevState = this.state;
        let emitter_id = nextProps.emitter_id;
        
        axios.get(`${constants.API_URL}/emissores.json`)
            .then((res) => {
                if(res.statusText === 'OK') {
                    let emitter = res.data.find(em => emitter_id==em.id);
                    this.setState({ emitter: emitter });
                } else {
                    throw new Error('Server error');
                }
            })
            .catch(() => this.setState(prevState));
    }
    
    render () {
        return (
            <div>
                teste
            </div>
        );
    }
}

DashboardContent.propTypes = {
  emitter_id: PropTypes.string
};

export default DashboardContent;