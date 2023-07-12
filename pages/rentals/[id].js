import styles from "@/styles/Unit.module.css"
import Conditional from "@/components/conditional";
const data = require('@/public/rentals.json');
import Link from 'next/link';
import Image from "next/image";

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
            <Conditional showWhen={property.courtWalk <= 60}>
                <div className={styles.walk}>
                    <Image src="/walking.svg" width="48" height="24" />
                    <text>Walk to Court Street {property.courtWalk} mins</text>
                </div>
            </Conditional>
            <div className={styles.listing}>
                <h1>{property.address}</h1>
                <h3>{property.city}</h3>
                <br/>
                <iframe src={property.mapLink} width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className={styles.description}>
                    <div><p>Building Description: <br/><br/> {property.description}</p></div>
                    <div><p>Unit Description: <br/><br/> {unit.description}</p></div>
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
                <p className={styles.availibility}>Available on: {unit.available}</p>
                <p className={styles.applyButton}><Link href="https://prokosrentals.managebuilding.com/Resident/rental-application/new">Apply Now</Link></p>
            </div>
        </> 
    );
}
 
export default Properties;