import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

const Navigation = () => {
    return ( 
        <>
            <nav className={styles.bar}>
                <Link href='/' className={styles.nav}>Home</Link>
                <div className={styles.nav}>
                    <div className={styles.showdrop}>
                        <button className={styles.dropbtn}>Rent</button>
                        <div className={styles.dropdowncontent}>
                            <Link href='/rentals'>Rentals</Link>
                            <Link href='/storageunits'>Storage Units</Link>
                            <Link href='/parking'>Parking</Link>
                        </div>
                    </div>
                </div>
                <Link href='https://prokosrentals.managebuilding.com/Resident/rental-application/new' className={styles.nav}>Apply Now</Link>
                <Link href='/about' className={styles.nav}>About</Link>
                <Link href='/contactus' className={styles.nav}>Contact Us</Link>
            </nav>
        </>
     );
}
 
export default Navigation;