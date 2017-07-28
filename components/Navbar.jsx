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
        this.onAddButtonTap = this.onAddButtonTap.bind(this);
    }

    onTextChange(text) {
        this.setState({searchText: text});
    }

    onSearch() {
        this.props.history.push({pathname: `/results/${this.state.searchText}`});
    }

    onAddButtonTap() {
        this.props.history.push({pathname: '/addsite'});
    }

    render() {
        return (
                <MuiThemeProvider>
                    <div className="nav">
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
                            style={{maxHeight: "35px", marginTop: "5px"}}
                            onClick={this.onAddButtonTap}
                        />
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Navbar;