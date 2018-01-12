import React, {Component} from 'react';
import axios from 'axios';
import constants from './constants';
import './assets/css/App.css';

import Dashboard from './components/Dashboard';

class App extends Component {
    constructor() {
        super(...arguments);
        this.state={
            emitters: []
        }
    }

    componentDidMount() {
        const prevState = this.state;
        axios.get(`${constants.API_URL}/emissores.json`)
            .then((res) => {
                if(res.statusText === 'OK')
                    this.setState({emitters: res.data});
                else
                    throw new Error('Server error');
            })
            .catch(() => {
                this.setState(prevState);
            });
    }

    render() {
        return (
            <div className="App">
                <Dashboard emitters={this.state.emitters}
                           active_emitter={this.props.params.emitter_id} />
            </div>
        );
    }
}

export default App;
