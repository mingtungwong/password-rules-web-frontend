import React from 'react';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onTextChange(text) {
        this.setState({searchText: text});
    }

    onSearch() {
        this.props.history.push({pathname: `/results/${this.state.searchText}`});
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div id="test">
                        <SearchBar
                            hintText=""
                            onChange={ this.onTextChange }
                            onRequestSearch={ this.onSearch }
                            style={{alignSelf: 'center'}}
                        />
                        <RaisedButton label="test" style={{float: 'right'}}/>
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Navbar;