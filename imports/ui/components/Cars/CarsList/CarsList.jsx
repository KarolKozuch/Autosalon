import React from 'react';
import {Cars} from '/imports/api/cars';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {CarsListItem} from '../CarsListItem/CarsListItem.jsx';


export default class CarsList extends TrackerReact(React.Component) {
    constructor(props){
        super(props);
    }

    render() {

        const rows = Cars.find().fetch().map((car) => {
            return (<CarsListItem key={car._id} car={car}/>);
        });
        return (
        <div>
            {rows}
        </div>
        )

    }

}

