import React from 'react';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import NavBarButton from './NavBarButton.jsx';
import { Link } from 'react-router-dom';

const buttonLinks = [
    "Home",
    "Add Site",
    "FAQ"
];

const buttonStyle = {
    position: 'relative',
    top: '10px',
    margin: '0px'
};

const toolBarStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onTextChange(text) {
        this.setState({searchText: text});
    }

    onSearch() {
        this.props.dispatch(this.props.getSearchResults(this.state.searchText));
        this.props.history.push({pathname: `/results/${this.state.searchText}`});
    }

    onButtonClick(path) {
        const push = this.props.history.push;
        push({pathname: `/${path}`})
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div className="nav">
                        <Toolbar style={toolBarStyle}>
                            <ToolbarGroup firstChild={true}>
                            </ToolbarGroup>
                                <NavBarButton
                                    title="Home"
                                    push={this.onButtonClick}
                                />
                                <ToolbarSeparator style={buttonStyle} />
                                <NavBarButton
                                    title="Add Site"
                                    push={this.onButtonClick}
                                />
                                <ToolbarSeparator style={buttonStyle} />
                                <NavBarButton
                                    title="FAQ"
                                    push={this.onButtonClick}
                                />
                            <ToolbarGroup lastChild={true}>
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
                            </ToolbarGroup>
                        </Toolbar>
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Navbar;