import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import  Home  from './home.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter >
                <Route path="/" component={ Home } />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('start'));

export default App;