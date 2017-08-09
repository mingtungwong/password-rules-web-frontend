import React from 'react';
import SearchBar from 'material-ui-search-bar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const buttonStyle = {
    maxHeight: '35px',
    marginTop: '5px',
    position: 'relative',
    top: '5px',
    outline: 'none'
}

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onAddButtonTap = this.onAddButtonTap.bind(this);
        this.onHomeButtonTap = this.onHomeButtonTap.bind(this);
    }

    onTextChange(text) {
        this.setState({searchText: text});
    }

    onSearch() {
        this.props.dispatch(this.props.getSearchResults(this.state.searchText));
        this.props.history.push({pathname: `/results/${this.state.searchText}`});
    }

    onAddButtonTap() {
        this.props.history.push({pathname: '/addsite'});
    }

    onHomeButtonTap() {
        this.props.history.push({pathname: '/home'});
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div className="nav">
                        <RaisedButton
                            label="Home"
                            style={buttonStyle}
                            onClick={this.onHomeButtonTap}
                        />
                        <SearchBar
                            hintText=""
                            onChange={ this.onTextChange }
                            onRequestSearch={ this.onSearch }
                            style={{
                                margin: '5px auto',
                                textAlign: 'center',
                            }}
                        />
                        <RaisedButton
                            label="Add Site"
                            style={buttonStyle}
                            onClick={this.onAddButtonTap}
                        />
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Navbar;