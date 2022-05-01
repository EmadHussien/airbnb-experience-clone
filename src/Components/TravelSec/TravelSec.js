import React from "react"
import "./TravelSec.css"
import locationIco from "../../images/location.png"

export default function TravelSec(props)
{
    return(
            <section className="container">
                <div className="sec-exp">
                    <img src={props.item.imageUrl} alt= {props.item.title}/>
                    <div className="sec-info">
                        <div className="sec-location">
                            <img src={locationIco} className="loc-ico" alt="location"/> 
                            <p className="country">{props.item.location}</p>
                            <a href={props.item.googleMapsUrl}
                            target="_blank"  
                            rel ='noreferrer'  
                            className="map">View on Google Maps</a>
                        </div>
                        <h1 className="title">{props.item.title}</h1>
                        <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                        <p className="description">{props.item.description}</p>
                    </div>
                </div>
                  <hr/>
            </section>
)}