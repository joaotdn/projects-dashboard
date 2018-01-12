import React, {PureComponent} from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { NavigationDrawer, ListItem, Drawer, MenuButton, FontIcon } from 'react-md';
import DashboardContent from './DashboardContent';
import DashboardNav from './DashboardNav';

import 'babel-polyfill';

class Dashboard extends PureComponent {
    constructor() {
        super(...arguments);
        this.state={
            title: "Painel de projetos"
        }
    }

    componentWillReceiveProps(nextProps) {
        let emitter = nextProps.emitters.find(em => em.id==nextProps.active_emitter);
        if (emitter) {
            this.setState({ title: emitter.name });
        }
    }      

    render() {
        return (
            <div>
                <NavigationDrawer toolbarTitle={this.state.title}
                                  drawerTitle="Emissores"
                                  navClassName="list-emitters"
                                  defaultMedia="desktop"
                                  toolbarActions={<DashboardNav emitter_id={this.props.active_emitter} />}
                                  navItems={this.props.emitters.map((emitter) => (
                                      <li key={emitter.id}>
                                          <ListItem itemComponent={Link}
                                                    primaryText={emitter.name}
                                                    activeClassName="md-list-title--active"
                                                    itemProps={{
                                                        to: "/emissor/" + emitter.id,
                                                        activeStyle: {
                                                            backgroundColor: "#f1f1f1",
                                                            display: 'inline-block',
                                                            width: '100%'
                                                        },
                                                    }}/>
                                      </li>
                                  ))}>
                    <DashboardContent emitter_id={this.props.active_emitter} />
                </NavigationDrawer>
            </div>
        );
    }
}

Dashboard.propTypes = {
    emitters: PropTypes.arrayOf(PropTypes.object),
    active_emitter: PropTypes.string
};

export default Dashboard;