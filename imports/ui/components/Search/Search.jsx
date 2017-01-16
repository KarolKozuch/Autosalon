import React from 'react';
import {Cars} from "../../../api/cars.jsx";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {CarsListItem} from '../Cars/CarsListItem/CarsListItem.jsx';

const color={
    underline: {
        borderColor: "#f57c00"
    },
    label:{
        color:"#f57c00"
    }
};
var primaryState;

 class Search extends TrackerReact(React.Component) {

    constructor(props){
        super(props);
        var cars=Cars.find().fetch();
        this.state = {
            brand:[],
            model:[],
            color:[],
            year:[],
            type:[],
            value:3

        };
         cars.forEach((car)=>{
             this.state.brand.push(car.brand);
             this.state.model.push(car.model);
             this.state.color.push(car.color);
             this.state.year.push(car.year);
             this.state.type.push(car.type);
         });

        primaryState = Object.keys(this.state).map((k)=>this.state[k]);

        this.bound ={
            searchChange: this.cars.bind(this),
            brandChange: this.handleChange.bind(this, 'brand'),
            modelChange: this.handleChange.bind(this,'model'),
            colorChange: this.handleChange.bind(this,'color'),
            yearChange: this.handleChange.bind(this,'year'),
            valueChange: this.handleValueChange.bind(this)

        }
    }

     handleChange(key, ev, value, ) {
         if (value === "")
         { var number;
             switch(key){
                 case "brand": number=0;
                     break;
                 case "model": number=1;
                     break;
                 case "color": number=2;
                     break;
                 case "year": number=3;
                     break;
                 case "type": number=4;
                     break;
             }

             this.setState({
                 [key]: primaryState[number]
             });
         }
         else
             this.setState({
                 [key]: [value]
             });
         }
        handleValueChange(event, value) {
            if(value != 3)
            this.setState({
                type: [event.target.textContent[0].toLowerCase()],
                value: value

            });
            else {
                this.setState({
                    type : ['o', 'c', 'd'],
                    value: value
                })

            }
        }


    cars() {
        console.log(this.state);
        return Cars.find({
            brand:{$in: this.state.brand},
            model:{$in: this.state.model},
            color:{$in: this.state.color},
            year:{$in: this.state.year},
            type:{$in: this.state.type}
        }).fetch();
    }


    render()
    {
        if(Cars) {
            const results = this.cars().map((car) => {
                return (<CarsListItem key={car._id} car={car}/>);
            });
            return (

                <div className="container search-container">
                        <div className="card search-card">
                            <div className="card-action">
                                <TextField
                                    floatingLabelText="Marka"
                                    onChange={this.bound.brandChange}
                                    underlineStyle={color.underline}
                                    underlineFocusStyle={color.underline}
                                    floatingLabelFocusStyle={color.label}
                                    floatingLabelShrinkStyle={color.label}
                                />
                                <br />
                                <TextField
                                    floatingLabelText="Model"
                                    onChange={this.bound.modelChange}
                                    underlineStyle={color.underline}
                                    underlineFocusStyle={color.underline}
                                    floatingLabelFocusStyle={color.label}
                                    floatingLabelShrinkStyle={color.label}/>
                                <br />
                                <TextField
                                    floatingLabelText="Kolor"
                                    onChange={this.bound.colorChange}
                                    underlineStyle={color.underline}
                                    underlineFocusStyle={color.underline}
                                    floatingLabelFocusStyle={color.label}
                                    floatingLabelShrinkStyle={color.label}/>
                                <br />
                                <TextField
                                    floatingLabelText="Rok produkcji"
                                    onChange={this.bound.yearChange}
                                    underlineStyle={color.underline}
                                    underlineFocusStyle={color.underline}
                                    floatingLabelFocusStyle={color.label}
                                    floatingLabelShrinkStyle={color.label}/>
                                <br />
                                <SelectField
                                    onChange={this.bound.valueChange}
                                    floatingLabelText="Typ"
                                    value={this.state.value}
                                    underlineStyle={color.underline}
                                    underlineFocusStyle={color.underline}
                                    floatingLabelFocusStyle={color.label}
                                    floatingLabelShrinkStyle={color.label}
                                    selectedMenuItemStyle={color.label}>
                                    <MenuItem value={0} primaryText="Osobowe"/>
                                    <MenuItem value={1} primaryText="Dostawcze"/>
                                    <MenuItem value={2} primaryText="Ciężarowe"/>
                                    <MenuItem value={3} primaryText="Brak"/>

                                </SelectField>
                                <br />
                                <RaisedButton
                                    label="Szukaj"
                                    onClick={this.bound.searchChange}
                                    rippleStyle={{color:"#f57c00"}}/>
                            </div>

                        </div>

                        <div>
                            {results}
                        </div>

                    
                </div>
            )
        }
        else return (
            <div className="container">
                <div className="row">
                    <div className="col s2 offset-s5">
                        <div className="valign-wrapper">
                            <div className="valign">
                                <div className="preloader-wrapper big active center">
                                    <div className="spinner-layer spinner-blue-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="gap-patch">
                                            <div className="circle"></div>
                                        </div>
                                        <div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Search};