import React from 'react';
import {mount} from 'react-mounter';

import {Layout} from '../imports/ui/components/Layouts/Layout.jsx';
import {App} from '../imports/ui/components/App/App.jsx';
import {Contact} from '../imports/ui/components/Contact/Contact.jsx';
import {Search} from '../imports/ui/components/Search/Search.jsx'
import {CarDetail} from '../imports/ui/components/Cars/CarDetail/CarDetail.jsx';
import {Sell} from '../imports/ui/components/Sell/Sell.jsx';
import {carsData} from "/imports/api/cars.jsx";

Meteor.startup(function () {
    GoogleMaps.load({ v: '3', key: 'AIzaSyBhub0-pS1mEvumxIC8lF3H5q7IrXqXKOw', libraries: 'visualization,geometry,places' });
});


FlowRouter.route('/', {
    action() {
        mount(Layout, {
            content: <App />
        });
    }
});

FlowRouter.route('/Kontakt', {
    action() {
        mount(Layout, {
            content: <Contact />
        });
    }
});

FlowRouter.route('/Więcej/:id', {
    action(params) {
        mount(Layout, {
            content: <CarDetail params={params} />       
        });
    }
});
FlowRouter.route('/Sell/:id', {
    action(params) {
        mount(Layout, {
            content: <Sell params={params} />
        });
    }
});

FlowRouter.route('/SearchResult', {
    action() {
        mount(Layout, {
            content: <Search />
        });
    }
});

FlowRouter.notFound = {
    action: function () {
        FlowRouter.go('/');
    }
};



