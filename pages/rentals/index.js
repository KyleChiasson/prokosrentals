import styles from "@/styles/Rentals.module.css";
import Link from "next/link";
import Conditional from "@/components/conditional";
const data = require('./rentals.json');
import React, { useState } from 'react';

export const getStaticProps = async () => {
    return{
        props: { properties: data }
    }
}

const show = (data, property, unit) => {
    return ( (unit.showListing) &&
            ((data.house && unit.type == "house") || 
             (data.appartment && unit.type == "appartment") || 
             (data.studio && unit.type == "studio") || 
             (data.frat && unit.type == "frat") || 
             (data.commercial && unit.type == "commercial"))&&
            ((!data.albany && !data.amesville && !data.athens && !data.lancaster && !data.logan && !data.nelsonville && !data.theplains && !data.welston)||
             (data.albany      && property.city == "Albany, OH 45710") ||
             (data.amesville   && property.city == "Amesville, OH 45711") ||
             (data.athens      && property.city == "Athens, OH 45701") || 
             (data.lancaster   && property.city == "Lancaster, OH 43130") ||
             (data.logan       && property.city == "Logan, OH 43138") ||
             (data.nelsonville && property.city == "Nelsonville, OH 45764") ||
             (data.theplains   && property.city == "The Plains, OH 45780") ||
             (data.welston     && property.city == "Wellston, OH 45692"))&&
             (data.bedcount == "" || unit.beds == data.bedcount) &&
             (data.bathcount == "" || unit.baths == data.bathcount) &&
            ((unit.rent >= data.bottomprice && unit.rent <= data.topprice) || data.bottomprice == "" || data.topprice == "")&&
             (data.availibility == "" || Date.parse(data.availibility) >= Date.parse(unit.available)))
    
}

const anyShown = (data, property) => {
    for(let i = 0; i < property.units.length; i++)
        if(show(data, property, property.units[i]))
            return true;
    return false;
}

const Rentals = ({ properties }) => {
    const [data, setData] = React.useState({
        house: true,
        appartment: true,
        studio: true,
        frat: true,
        commercial: true,
        albany: true,
        amesville: true,
        athens: true,
        lancaster: true,
        logan: true,
        nelsonville: true,
        theplains: true,
        welston: true,
        bedcount: "",
        bathcount: "",
        availibility: "",
        topprice: "14000",
        bottomprice: "0",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
     
        setData({
            house: event.target.house.checked,
            appartment: event.target.appartment.checked,
            studio: event.target.studio.checked,
            frat: event.target.frat.checked,
            commercial: event.target.commercial.checked,
            albany: event.target.albany.checked,
            amesville: event.target.amesville.checked,
            athens: event.target.athens.checked,
            lancaster: event.target.lancaster.checked,
            logan: event.target.logan.checked,
            nelsonville: event.target.nelsonville.checked,
            theplains: event.target.theplains.checked,
            welston: event.target.welston.checked,
            bedcount: event.target.bedcount.value,
            bathcount: event.target.bathcount.value,
            availibility: event.target.avilibility.value,
            topprice: event.target.topprice.value,
            bottomprice: event.target.bottomprice.value,
        });
    };
    return ( 
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.segment}>
                    <div className={styles.showdrop}>
                        <button className={styles.dropbtn}>Rental Types <img src="downtriangle.svg" width={12} height={12}/></button>
                        <div className={styles.dropdowncontent}>
                            <div>
                                <input type="checkbox" id="house" defaultChecked></input>
                                <label htmlFor="house">House</label>
                            </div>
                            <div>
                                <input type="checkbox" id="appartment" defaultChecked></input>
                                <label htmlFor="appartment">Appartment</label>
                            </div>
                            <div>
                                <input type="checkbox" id="studio" defaultChecked></input>
                                <label htmlFor="studio">Studio</label>
                            </div>
                            <div>
                                <input type="checkbox" id="frat" defaultChecked></input>
                                <label htmlFor="frat">Fraternity</label>
                            </div>
                            <div>
                                <input type="checkbox" id="commercial" defaultChecked></input>
                                <label htmlFor="commercial">Commercial</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.segment}>
                    <div className={styles.showdrop}>
                        <button className={styles.dropbtn}>Locations <img src="downtriangle.svg" width={12} height={12}/></button>
                        <div className={styles.dropdowncontent}>
                            <div>
                                <input type="checkbox" id="albany" defaultChecked></input>
                                <label htmlFor="albany">Albany </label>
                            </div>
                            <div>
                                <input type="checkbox" id="amesville" defaultChecked></input>
                                <label htmlFor="amesville">Amesville </label>
                            </div>
                            <div>
                                <input type="checkbox" id="athens" defaultChecked></input>
                                <label htmlFor="athens">Athens </label>
                            </div>
                            <div>
                                <input type="checkbox" id="lancaster" defaultChecked></input>
                                <label htmlFor="lancaster">Lancaster </label>
                            </div>
                            <div>
                                <input type="checkbox" id="logan" defaultChecked></input>
                                <label htmlFor="logan">Logan </label>
                            </div>
                            <div>
                                <input type="checkbox" id="nelsonville" defaultChecked></input>
                                <label htmlFor="nelsonville">Nelsonville </label>
                            </div>
                            <div>
                                <input type="checkbox" id="theplains" defaultChecked></input>
                                <label htmlFor="theplains">The Plains </label>
                            </div>
                            <div>
                                <input type="checkbox" id="welston" defaultChecked></input>
                                <label htmlFor="welston">Welston </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.segment}>
                    <label htmlFor="bedcount">Number of Beds: </label>
                    <input type="number" id="bedcount" min={1} max={9}></input>
                    <br/><br/>
                    <label htmlFor="bathcount">Number of Bathrooms: </label>
                    <input type="number" id="bathcount" min={1} max={5}></input>
                </div>
                <div className={styles.segment}>
                    <label htmlFor="avilibility">Availability Date </label>
                    <input type="date" id="avilibility"></input>
                    <br/><br/>
                    <text>Price: </text>
                    <input type="number" id="bottomprice" min={0} max={14000} defaultValue={0}></input>
                    <text>-</text>
                    <input type="number" id="topprice" min={0} max={14000} defaultValue={14000}></input>
                </div>
                <div><input type="submit" id="search" value="search" className='center'></input></div>
            </form>
            {properties.map(property => (
                <Conditional showWhen={anyShown(data, property)}>
                    <div className={styles.property}>
                        {property.units.map(unit => (
                            <Conditional showWhen={show(data, property, unit)}>
                                <Link key={unit.id} href={'/rentals/' + unit.id} className={styles.listing}>
                                    <ul>
                                        <li><h4>{property.address}</h4><h5>Unit: {unit.unit}</h5><br/><h6>{property.city}</h6></li>
                                        <li>Beds: {unit.beds} | Bathrooms: {unit.baths} | Area: {unit.sqft} sqft</li>
                                        <li><p>Available on: {unit.available}&emsp;&emsp;Rent: ${unit.rent}</p></li>
                                    </ul>
                                </Link>
                            </Conditional>
                        ))}
                    </div>
                </Conditional>
            ))}
        </>
     );
}
 
export default Rentals;