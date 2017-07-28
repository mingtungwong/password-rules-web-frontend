import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import  Home  from './Home.jsx';
import Navbar from './Navbar.jsx';
import SearchResults from './SearchResults.jsx';
import SiteProfile from './SiteProfile.jsx';
import SiteCreationPage from './SiteCreationPage.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <Route component={ Navbar } />
                        <Switch>
                            <Route path="/home" component={ Home } />
                            <Route path="/results/:site" component={ SearchResults } />
                            <Route path="/site/:siteName" component={ SiteProfile } />
                            <Route path="/addsite" component={ SiteCreationPage } />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('start'));

export default App;