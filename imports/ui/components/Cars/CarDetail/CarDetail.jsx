import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Cars} from '../../../../api/cars.jsx';
import {parallax} from 'materialize-css/js/parallax';
import {carousel} from 'materialize-css/js/carousel';
import SweetAlert from 'sweetalert-react';
import '/node_modules/sweetalert/dist/sweetalert.css';


class CarDetail extends TrackerReact(React.Component){
    constructor(props){
    super(props);
        this.state={
            show:false
        };

    }
    componentDidUpdate(){
        $(this.refs.parallax).parallax();
        $(this.refs.parallax2).parallax();
        $(this.refs.carousel).carousel({full_width: true});
        }
    componentDidMount(){
        $(this.refs.parallax).parallax();
        $(this.refs.parallax2).parallax();
        $(this.refs.carousel).carousel({full_width: true});

    }
    type() {
        switch(Cars.findOne({_id: this.props.params.id}).type){
            case 'o':return 'Osobowe';
            case 'd':return 'Dostawcze';
            case 'c': return 'Ciężarowe';
        }
    }

    path(i){
        var Car = Cars.findOne({_id: this.props.params.id});
        
        i = i.toString();
        return ("/" + Car.model + i + ".jpg");

    }


    render() {
        const Car = Cars.findOne({_id: this.props.params.id});

        if (Car) {
            const price=(Car.details.price + Car.details.priceFormat);

            return (
                <div>
                    <div className="parallax-container">
                        <div className="parallax" ref="parallax"><img src={this.path(1)}/></div>
                    </div>
                    <div className="section white">
                    <div className="row container">
                        <h2 className="header orange-text text-darken-2">{Car.brand} {Car.model}</h2>
                        <p>{Car.description}</p>
                            <table className="responsive-table center">
                                <thead>
                                <tr>
                                    <th>Silnik</th>
                                    <th>Moc silnika</th>
                                    <th>Maksymalna szybkość</th>
                                    <th>Stan</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{Car.details.engine}</td>
                                    <td>{Car.details.horsepower}{Car.details.horsepowerFormat}</td>
                                    <td>{Car.details.maxV}{Car.details.maxVFormat}</td>
                                    <td>{Car.condition}</td>
                                </tr>
                                </tbody>
                                <thead>
                                <tr>
                                    <th>Rocznik</th>
                                    <th>Przebieg</th>
                                    <th>Kolor</th>
                                    <th>Typ</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{Car.year}</td>
                                    <td>{Car.details.distance}{Car.details.distanceFormat}</td>
                                    <td>{Car.color}</td>
                                    <td>{this.type()}</td>
                                </tr>
                                </tbody>
                            </table>
                        <div className="buy-box">
                            <button className="waves-effect waves-light btn btn-large black-text orange darken-2 buy-button" onClick={() => this.setState({ show: true })}><h5>{price}</h5></button>
                        </div>
                    </div>
                    </div>
                    <div className="parallax-container second-parallax-container" >
                        <div className="parallax" ref="parallax2"><img src={this.path(3)}/></div>
                    </div>
                    <div className="container">
                                <h4 className="center">Przeciągnij, aby zobaczyć galerię</h4>
                        <div className="carousel carousel-slider container" ref="carousel">
                            <a className="carousel-item"><img src={this.path(1)}/></a>
                            <a className="carousel-item"><img src={this.path(2)}/></a>
                            <a className="carousel-item"><img src={this.path(3)}/></a>
                        </div>
                    </div>
                    <SweetAlert
                        show={this.state.show}
                        title="Chcesz zarezerwować ten samochód?"
                        text="Potwierdzenie zabierzę Cię na stronę, gdzie możesz podać swoje dane. Kupna samochodu możesz dokonać na miejscu. Szczegóły w zakładce Kontakt"
                        showCancelButton
                        onConfirm={() => {
                                                this.setState({ show: false });
                                                FlowRouter.go(`/Sell/${Car._id}`);
                                                }}
                        onCancel = {() => this.setState({show:false})}
                        onEscapeKey={() => this.setState({ show: false })}
                        onOutsideClick={() => this.setState({ show: false })}
                        cancelButtonText="Nie"
                        confirmButtonText="Tak"
                        confirmButtonColor="#f57c00"
                    />
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

export {CarDetail};




