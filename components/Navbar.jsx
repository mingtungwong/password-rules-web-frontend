import React from 'react';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

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
        this.props.dispatch(this.props.getSearchResults(this.state.searchText));
        this.props.history.push({pathname: `/results/${this.state.searchText}`});
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div className="nav">
                        <ul className="navLinks">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/addsite">Add Site</Link></li>
                        </ul>
                        <SearchBar
                            hintText=""
                            onChange={ this.onTextChange }
                            onRequestSearch={ this.onSearch }
                            style={{
                                margin: '5px',
                                textAlign: 'center',
                            }}
                            className="searchBar"
                        />
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Navbar;