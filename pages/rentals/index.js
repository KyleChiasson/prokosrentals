import styles from "@/styles/Rentals.module.css";
import Link from "next/link";
import Conditional from "@/components/conditional";
const data = require('./rentals.json');
import React, { useState } from 'react';

export const getStaticProps = async () => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //const data = await res.json();
    return{
        props: { properties: data }
    }
}

const Rentals = ({ properties }) => {
    const [data, setData] = React.useState({
        livingspace: true,
        other: true,
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
            livingspace: event.target.livingspace.checked,
            other: event.target.other.checked,
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
                    <text>Rental Types: </text>
                    <ul>
                        <li>
                            <input type="checkbox" id="livingspace" defaultChecked></input>
                            <label htmlFor="livingspace">Living Space </label>
                        </li>
                        <li>
                            <input type="checkbox" id="other" defaultChecked></input>
                            <label htmlFor="other">Other </label>
                        </li>
                    </ul>
                </div>
                <div className={styles.segment}>
                    <text>Locations: </text>
                    <ul>
                        <li>
                            <input type="checkbox" id="athens" defaultChecked></input>
                            <label htmlFor="athens">Athens </label>
                        </li>
                        <li>
                            <input type="checkbox" id="lancaster" defaultChecked></input>
                            <label htmlFor="lancaster">Lancaster </label>
                        </li>
                        <li>
                            <input type="checkbox" id="logan" defaultChecked></input>
                            <label htmlFor="logan">Logan </label>
                        </li>
                        <li>
                            <input type="checkbox" id="nelsonville" defaultChecked></input>
                            <label htmlFor="nelsonville">Nelsonville </label>
                        </li>
                        <li>
                            <input type="checkbox" id="theplains" defaultChecked></input>
                            <label htmlFor="theplains">The Plains </label>
                        </li>
                        <li>
                            <input type="checkbox" id="welston" defaultChecked></input>
                            <label htmlFor="welston">Welston </label>
                        </li>
                    </ul>
                </div>
                <div className={styles.segment}>
                    <label htmlFor="bedcount">Number of Beds: </label>
                    <input type="number" id="bedcount" min={1} max={9}></input>
                    <br></br><br></br>
                    <label htmlFor="bathcount">Number of Bathrooms: </label>
                    <input type="number" id="bathcount" min={1} max={5}></input>
                    <br></br><br></br>
                    <label htmlFor="avilibility">Availability Date </label>
                    <input type="date" id="avilibility"></input>
                    <br></br><br></br>
                    <text>Price: </text>
                    <input type="number" id="bottomprice" min={0} max={14000} defaultValue={0}></input>
                    <text>-</text>
                    <input type="number" id="topprice" min={0} max={14000} defaultValue={14000}></input>
                </div>
                <div><input type="submit" id="submit" value="submit"></input></div>
            </form>
            {properties.map(property => (
                <Conditional showWhen={
                    ((data.livingspace && property.beds != "-") || (data.other && property.baths == "-"))&&
                    (true)&&//location
                    (data.bedcount == "" || property.beds == data.bedcount) &&
                    (data.bathcount == "" || property.baths == data.bathcount) &&
                    ((property.rent >= data.bottomprice && property.rent <= data.topprice) || data.bottomprice == "" || data.topprice == "")&&
                    (data.availibility == "" || Date.parse(data.availibility) >= Date.parse(property.available))
                    }>
                    <Link key={property.id} href={'/rentals/' + property.id} className={styles.listing}>
                        <ul>
                            <li><h4>{property.address}</h4><h5>Unit: {property.unit}</h5></li>
                            <li>Beds: {property.beds} | Bathrooms: {property.baths} | Area: {property.sqft} sqft</li>
                            <li><p>Available on: {property.available}&emsp;&emsp;Rent: ${property.rent}</p></li>
                        </ul>
                    </Link>
                </Conditional>
            ))}
        </>
     );
}
 
export default Rentals;