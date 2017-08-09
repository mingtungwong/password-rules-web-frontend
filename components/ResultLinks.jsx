import React from 'react';
import { Link } from 'react-router-dom';

class ResultLinks extends React.Component {
    render() {
        const results = this.props.results;
        return (
                <div>
                    {
                        results.length ?
                        results.map(result => {
                            return (
                                <div className="searchResultLinks">
                                    <Link to={`/site/${result.site}`}>{result.site}</Link>
                                </div>
                            )
                        })
                        :
                        <div>Sorry, no results found.</div>
                    }
                </div>
        )
    }
}

export default ResultLinks;