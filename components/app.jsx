import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import  Home  from './Home.jsx';
import Navbar from './Navbar.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <BrowserRouter >
                    <Route path="/" component={ Home } />
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('start'));

export default App;