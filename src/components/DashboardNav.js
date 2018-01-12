import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { ListItem, MenuButton } from 'react-md';

export class DashboardNav extends Component {
    render() { 
        return (
            <div>
                <MenuButton id="menu-button-2"
                            listClassName="list-emitters"
                            icon
                            menuItems={[
                                <ListItem key={1}
                                          primaryText="Horas executadas"
                                          itemComponent={Link}
                                          itemProps={{
                                              to: "/horas-executadas/"
                                          }} />,
                                <ListItem key={2} primaryText="Últimos projetos entregues" />,
                                <ListItem key={3} primaryText="Projetos em andamento" />,
                                <ListItem key={4} primaryText="Projetos planejados" />,
                                <ListItem key={5} primaryText="Horas planejadas" />,
                            ]}>more_vert</MenuButton>
            </div>
        );
    }
}

DashboardNav.propTypes = {
    emitter_id: PropTypes.string
};
 
export default DashboardNav;