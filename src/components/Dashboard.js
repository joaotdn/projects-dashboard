import React, {PureComponent} from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { NavigationDrawer, ListItem, Drawer } from 'react-md';
import DashboardContent from './DashboardContent';

class Dashboard extends PureComponent {
    render() {
        return (
            <div>
                <NavigationDrawer toolbarTitle="Painel de projetos"
                                  drawerTitle="Emissores"
                                  navClassName="list-emitters"
                                  defaultMedia="desktop"
                                  desktopType={Drawer.DrawerTypes.PERSISTENT}
                                  navItems={this.props.emitters.map((emitter) => (
                                      <li key={emitter.id}>
                                          <ListItem itemComponent={Link}
                                                    primaryText={emitter.name}
                                                    activeClassName="md-list-title--active"
                                                    itemProps={{
                                                        to: "/emitter/" + emitter.id,
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