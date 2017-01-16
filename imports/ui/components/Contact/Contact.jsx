import React from 'react';
import MapsLocalPhone from '/node_modules/material-ui/svg-icons/maps/local-phone';
import ContentMail from '/node_modules/material-ui/svg-icons/content/mail';
var style ={
    height:48
};
var Style ={
    height:500,
    width:800
};

const COORDINATES= [50.0647, 19.945];

class Contact extends React.Component {

    componentDidMount(){
        $(this.refs.geo).geocomplete({
            map: this.refs.map,
            location: COORDINATES,
            mapOptions:{
                zoom:14
            }
        }) ;
    }
    
    render () {
        return (
            <div className="container">
                <div className="col s12 m8 offset-m2">
                    <div className="card white darken-1">
                        <div className="card-title">
                            <h2 className="orange-text text-darken-2 sell-title">Kontakt</h2>
                        </div>
                        <div className="card-action contact-card">
                            <div className="contact-info">
                                    <div className="phone-adress"><MapsLocalPhone color="#f57c00" style={style}/><h5 className="orange-text text-darken-2">123 456 789</h5></div>
                                    <div className="phone-adress"><ContentMail color="#f57c00" style={style}/><h5 className="orange-text text-darken-2">email@email.com</h5></div>

                            </div>
                            <input type="text" ref="geo" className="hide"></input>
                            <div ref="map" style={Style}></div>
                        </div>
                    </div>
                </div>
            </div>
            

                )
    }
}

export {Contact};