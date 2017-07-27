import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import  Home  from './Home.jsx';
import Navbar from './Navbar.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route component={ Navbar } />
                        <Switch>
                            <Route path="/home" component={ Home } />
                            <Route path="/results" component={ SearchResults } />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('start'));

export default App;