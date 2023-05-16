import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
    return ( 
        <>
            <nav className={styles.bar}>
                <Link href='/' className={styles.nav}>Home</Link>
                <Link href='/rentals' className={styles.nav}>Rentals</Link>
                <Link href='/storageunits' className={styles.nav}>Storage Units</Link>
                <Link href='/parking' className={styles.nav}>Parking</Link>
                <Link href='/applynow' className={styles.nav}>Apply Now</Link>
                <Link href='/about' className={styles.nav}>About</Link>
                <Link href='/contactus' className={styles.nav}>Contact Us</Link>
            </nav>
        </>
     );
}
 
export default Navigation;