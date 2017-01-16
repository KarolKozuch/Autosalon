import React from 'react';
import SweetAlert from 'sweetalert-react';
import '/node_modules/sweetalert/dist/sweetalert.css';

 class CarsListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {show:false};
    }

     type() {
         switch(this.props.car.type){
             case 'o':return 'Osobowe';
             case 'd':return 'Dostawcze';
             case 'c': return 'Ciężarowe';
         }
     }


    render() {
        const car = this.props.car;
        const path=("/"+car.model+"1.jpg");
        const price=(car.details.price + car.details.priceFormat);
if(car)
        return (
                <div className="row">
                    <div className="col s12 m8 l6 offset-m2 offset-l3">
                        <div className="card blue-grey darken-1 hoverable">
                            <div className="card-image">
                                <a href={`/Więcej/${car._id}`}><img src={path}/></a>
                                <div className="card-title-layout card-title">
                                    <h4><a href={`/Więcej/${car._id}`}>{car.brand} {car.model}</a></h4>
                                    <button className="waves-effect waves-light btn btn-large black-text orange darken-2 buy-button" onClick={() => this.setState({ show: true })}>{price}</button>
                                </div>
                            </div>
                            <div className="card-content white-text">
                              <table className="bordered responsive-table">
                                  <tbody>
                                      <tr>
                                          <td className="orange-text text-darken-2"><h6>Silnik</h6></td>
                                          <td><h6>{car.details.engine}</h6></td>
                                          <td className="orange-text text-darken-2"><h6>Przebieg</h6></td>
                                          <td><h6>{car.details.distance}{car.details.distanceFormat}</h6></td>
                                          <td className="orange-text text-darken-2"><h6>Stan</h6></td>
                                          <td><h6>{car.condition}</h6></td>
                                      </tr>
                                      <tr>
                                          <td className="orange-text text-darken-2"><h6>Rocznik</h6></td>
                                          <td><h6>{car.year}</h6></td>
                                          <td className="orange-text text-darken-2"><h6>Kolor</h6></td>
                                          <td><h6>{car.color}</h6></td>
                                          <td className="orange-text text-darken-2"><h6>Typ</h6></td>
                                          <td><h6>{this.type()}</h6></td>
                                     </tr>
                                  </tbody>
                              </table>
                            </div>
                                    <SweetAlert
                                        show={this.state.show}
                                        title="Chcesz zarezerwować ten samochód?"
                                        text="Potwierdzenie zabierzę Cię na stronę, gdzie możesz podać swoje dane. Kupna samochodu możesz dokonać na miejscu. Szczegóły w zakładce Kontakt."
                                        showCancelButton
                                        onConfirm={() => {
                                                this.setState({ show: false });
                                                FlowRouter.go(`/Sell/${car._id}`);
                                                }}
                                        onCancel = {() => this.setState({show:false})}
                                        onEscapeKey={() => this.setState({ show: false })}
                                        onOutsideClick={() => this.setState({ show: false })}
                                        cancelButtonText="Nie"
                                        confirmButtonText="Tak"
                                        confirmButtonColor="#f57c00"
                                    />
                    </div>
                </div>
            </div>

        )
        else return (
<p>loading</p>
)
    }

}

export {CarsListItem};

