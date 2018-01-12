import React, {PureComponent} from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { NavigationDrawer, ListItem } from 'react-md';
import DashboardContent from './DashboardContent';

class Dashboard extends PureComponent {
    constructor() {
        super();

        this.state={
            renderNode: null,
            visible: false
        };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false, renderNode: null });
    }

    render() {
        const { visible, renderNode } = this.state;
        return (
            <div>
                <NavigationDrawer renderNode={renderNode}
                                  toolbarTitle="Painel de projetos"
                                  drawerTitle="Emissores"
                                  navClassName="list-emitters"
                                  navItems={this.props.emitters.map((emitter) => (
                                      <li key={emitter.id}>
                                          <ListItem itemComponent={Link}
                                                    primaryText={emitter.name}
                                                    itemProps={{
                                                        to: "/emitter/" + emitter.id
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