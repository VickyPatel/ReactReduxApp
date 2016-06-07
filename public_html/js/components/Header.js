import React from 'react';

export default class Header extends React.Component {
    render() {

        const headerStyle = {
            paddingTop: 15,
            paddingBottom: 15,
            color: 'blue',
            fontWeight: 600,
            fontSize: 30
        };

        return (
            <header style={headerStyle}>Todo List</header>
        );
    }
}
