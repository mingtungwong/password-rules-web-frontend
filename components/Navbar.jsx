import React from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        console.log(this.props);
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onTextChange(text) {
        this.setState({searchText: text});
    }

    onSearch() {
    }

    render() {
        return (
            <MuiThemeProvider>
                <SearchBar
                    style={
                        {
                          margin: '0 auto',
                          maxWidth: '33%'  
                        }
                    }
                    onChange={ this.onTextChange }
                    onRequestSearch={ this.onSearch }
                    />
            </MuiThemeProvider>
        )
    }
}

export default Navbar;