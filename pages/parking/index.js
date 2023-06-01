import styles from "@/styles/Parking.module.css"
import Image from "next/image";

const Parking = () => {
    return ( 
        <>
            
            <Image src="/parking1.jpg" width="400" height="200" className={styles.image}></Image>
            <div className={styles.text}>
                <h3>Affordable Off-Campus Parking</h3>
                <p>Near Court St. & Ohio University's Campus</p>
                <p>Locations:</p>
                <ul>
                    <li>
                        <p>78 East State St.</p>
                        <p>Perfect for those that live near College Street</p>
                    </li>
                    <li>
                        <p>9 West Stimson St.</p>
                        <p>Ideal for those who live on-campus, located near Palmer St. <br></br> and is just a short walk from East & South Green.</p>
                    </li>
                </ul>
                <p>Rates:</p>
                <ul>
                    <li>$320 Spring Semester</li>
                    <li>$400 Fall Semester at all lots</li>
                    <li>$80 per month at all lots</li>
                    <li>$15 per weekend (Holiday rates may differ)</li>
                </ul>
                <h4>Spots fill up fast! Reserve your space for next school year today!</h4>
            </div>
        </>
    );
}
 
export default Parking;