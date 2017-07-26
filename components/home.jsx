import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div><p>Hello</p></div>
        )
    }
}

ReactDOM.render(<Home/>, document.getElementById('start'));

export default Home;