import React from 'react';
import {Mongo} from 'meteor/mongo';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Cars} from '/imports/api/cars';
import CarsList from '/imports/ui/components/Cars/CarsList/CarsList.jsx';

class App extends TrackerReact(React.Component) {

    render() {
        if(Cars.find().count() === 0)
            return null;
        else {
            return (
                <CarsList />
            )
        }
    }

}
export {App};
