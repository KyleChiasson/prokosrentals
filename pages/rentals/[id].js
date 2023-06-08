import styles from "@/styles/Unit.module.css"
const data = require('./rentals.json');
import Link from 'next/link';

export const getStaticPaths = async () => {
    let array = [];
    data.map(property => property.units.map(unit => {
        array.push({params: { id: unit.id.toString() }})
    }))
    
    return {
        paths: array,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < data[i].units.length; j++){
            if(data[i].units[j].id.toString() == id)
                return{
                    props: { property: data[i], unit: data[i].units[j]}
                }
        }
    }
}

const Properties = ({property, unit}) => {
    return ( 
        <>
            <Link href={"/rentals"} className={styles.link}><h3>&lt;Back</h3></Link>
            <p className={styles.walk}>Walk to Court Street {property.courtWalk} mins</p>
            <div className={styles.listing}>
                <h1>{property.address}</h1>
                <h3>{property.city}</h3>
                <div className={styles.description}>
                    <div><p>Building Description: <br></br><br></br> {property.description}</p></div>
                    <div><p>Unit Description: <br></br><br></br> {unit.description}</p></div>
                    <div><p>Building Amenities:</p> <ul>{property.amenities.map(a => (
                        <li>{a}</li>
                    ))}</ul></div>
                    <div><p>Unit Amenities:</p> <ul>{unit.amenities.map(a => (
                        <li>{a}</li>
                    ))}</ul></div>
                </div>
                <p>Unit: {unit.unit}</p>
                <p>Area: {unit.sqft} sqft</p>
                <p>Beds: {unit.beds}</p>
                <p>Bathrooms: {unit.baths}</p>
                <p>Rent: ${unit.rent} per month</p>
                <p>Price Information: {unit.priceInfo}</p>
                <p>If you have any questions regarding rent please reach out to us.</p>
                <p className={styles.availibility}>Available on: --/--/--</p>
                <form className={styles.availibility}>
                    <input type="submit" value="Apply Now"></input>
                </form>
            </div>
        </> 
    );
}
 
export default Properties;