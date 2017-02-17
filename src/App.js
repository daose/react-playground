import React, { Component } from 'react';
import TierList from './components/TierList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <TierList />
            </MuiThemeProvider>
        );
    }
}

export default App;
