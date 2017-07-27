import React from 'react';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        console.log('my props', this.props.location.state.text);
    }

    render() {
        return (
            <div>
                This is temporary results page.
            </div>
        )
    }
}

export default SearchResults;