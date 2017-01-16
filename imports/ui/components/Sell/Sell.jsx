import React from 'react';
import SweetAlert from 'sweetalert-react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Cars} from '../../../api/cars.jsx';
import TextField from 'material-ui/TextField';


const color={
    underline: {
        borderColor: "#f57c00"
    },
    label:{
        color:"#f57c00"
    }
};

class Sell extends TrackerReact(React.Component) {
    constructor(props){
        super(props);

        this.state = {
            surname:" ",
            name:"",
            city:"",
            street:"",
            number:"",
            phoneNumber:"",
            mail:"",
            show: false
        };

        this.bound = {
            surnameChange: this.handleChange.bind(this, 'surname'),
            nameChange: this.handleChange.bind(this, 'name'),
            cityChange: this.handleChange.bind(this, 'city'),
            streetChange: this.handleChange.bind(this, 'street'),
            numberChange: this.handleChange.bind(this, 'number'),
            mailChange: this.handleChange.bind(this, 'mail'),
            phoneNumberChange: this.handleChange.bind(this, 'phoneNumber')
        }

        }

    handleChange(key, ev, value) {
        this.setState({
            [key]: value
        });
    }

    button(ev)
    {    ev.preventDefault();
        var state=this.state;

        if(state.name && state.surname && state.city && state.street && state.number && state.mail && state.phoneNumber) {
            if (Number(state.number) && Number(state.phoneNumber))
                this.setState({
                    show: true
                });
            else
                alert("Numer telefonu i numer domu muszą być liczbami");
        }

            else
                alert("Wypełnij wszystkie pola!");

    }

    render () {
        const Car = Cars.findOne({_id: this.props.params.id});
        if(Car) {
            const path=("/"+Car.model+"1.jpg");
            return (
                <div className="row">
                    <div className="col s12 m10 offset-m1">
                        <div className="card white darken-1">
                            <div className="card-title">
                                <h2 className="orange-text text-darken-2 sell-title">Podaj dane</h2>
                            </div>
                                <div className="card-action sell-card">
                                    <form className="sell-data">
                                        
                                    <TextField
                                        floatingLabelText="Imię"
                                        onChange={this.bound.surnameChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                       />
                                    <br />
                                    <TextField
                                        floatingLabelText="Nazwisko"
                                        onChange={this.bound.nameChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                        />
                                    <br />
                                    <TextField
                                        floatingLabelText="Miejscowość"
                                        onChange={this.bound.cityChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                        />
                                    <br />
                                    <TextField
                                        floatingLabelText="Ulica"
                                        onChange={this.bound.streetChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                        />
                                    <br />
                                    <TextField
                                        floatingLabelText="Numer domu"
                                        onChange={this.bound.numberChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                        />
                                    <br />
                                        <TextField
                                            floatingLabelText="Numer telefonu"
                                            onChange={this.bound.phoneNumberChange}
                                            underlineStyle={color.underline}
                                            underlineFocusStyle={color.underline}
                                            floatingLabelFocusStyle={color.label}
                                            floatingLabelShrinkStyle={color.label}
                                        />
                                        <br />
                                    <TextField
                                        floatingLabelText="Adres e-mail"
                                        onChange={this.bound.mailChange}
                                        underlineStyle={color.underline}
                                        underlineFocusStyle={color.underline}
                                        floatingLabelFocusStyle={color.label}
                                        floatingLabelShrinkStyle={color.label}
                                       />
                                <br />
                                        <button className="waves-effect waves-light btn btn-large black-text orange darken-2 sell-button" onClick={this.button.bind(this)}>REZERWUJ</button>
                                            
                                        </form>
                                <div className="sell-layout">
                                    <div className="sell-picture">
                                        <a href={`/Więcej/${Car._id}`}>
                                            <img src={path}/>
                                        </a>
                                    </div>
                                    <div className="sell-car-info">
                                        <table className="bordered responsive-table sell-table">
                                        <thead>
                                        <tr>
                                            <th>Marka</th>
                                            <th>Model</th>
                                            <th>Rocznik</th>
                                            <th>Cena</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{Car.brand}</td>
                                            <td>{Car.model}</td>
                                            <td>{Car.year}</td>
                                            <td>{Car.details.price}{Car.details.priceFormat}</td>
                                        </tr>
                                        </tbody>
                                        </table>

                                    </div>
                                </div>

                                </div>
                            <SweetAlert
                                show={this.state.show}
                                title="Potwierdź swój wybór"
                                text="Po potwierdzeniu zostaniesz przeniesiony do zakładki Kontakt w celu zapoznania się z lokalizacją autosalonu. Przycisk 'Rezygnuję' zabierze Cię na stronę główną."
                                showCancelButton
                                onConfirm={() => {
                                                this.setState({ show: false });
                                                FlowRouter.go(`/Kontakt`);
                                                }}

                                onCancel = {() => {this.setState({show:false});
                                                    FlowRouter.go(`/`);
                                                    }}
                                onEscapeKey={() => this.setState({ show: false })}
                                onOutsideClick={() => this.setState({ show: false })}
                                cancelButtonText="Rezygnuję"
                                confirmButtonText="Rezerwuję"
                                confirmButtonColor="#f57c00"
                            />
                            </div>
                        </div>
                    </div>
            )
        }
        else {
            return (
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
    }

export {Sell};
