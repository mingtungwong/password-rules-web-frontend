import React from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Navbar extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <SearchBar />
            </MuiThemeProvider>
        )
    }
}

export default Navbar;