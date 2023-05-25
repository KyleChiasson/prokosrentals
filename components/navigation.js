import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

const Navigation = () => {
    return ( 
        <>
            <ul className={styles.bar}>
                <li><Link href='/' className={styles.nav}>Home</Link></li>
                <li className={styles.nav}>
                    <div className={styles.showdrop}>
                        <button className={styles.dropbtn}>Rent</button>
                        <div className={styles.dropdowncontent}>
                        <Link href='https://prokosrentals.managebuilding.com/Resident/rental-application/new'>Apply Now</Link>
                            <Link href='/rentals'>Rentals</Link>
                            <Link href='/storageunits'>Storage Units</Link>
                            <Link href='/parking'>Parking</Link>
                        </div>
                    </div>
                </li>
                <li><Link href='/about' className={styles.nav}>About</Link></li>
                <li><Link href='/contactus' className={styles.nav}>Contact Us</Link></li>
                <li><Link href='https://prokosrentals.managebuilding.com/Resident/portal/login' className={styles.nav}>Sign In</Link></li>
            </ul>
        </>
     );
}
 
export default Navigation;