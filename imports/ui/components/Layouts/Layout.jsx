import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const Layout = ({content}) => (
    <MuiThemeProvider>
    <div className="nav">
    <Navigation />
    <div className='layout'>
        {content}
    </div>
</div>
        </MuiThemeProvider>
);


export {Layout};