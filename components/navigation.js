import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import Conditional from "./conditional";

const Navigation = () => {
    return ( 
        <>
            <ul className={styles.bar}>
                <li><Link href='/' className={styles.nav}>Home</Link></li>
                <li className={styles.nav}>
                    <div className={styles.showdrop}>
                        <button className={styles.dropbtn}>Rent <Image src="downtriangle.svg" width={12} height={12}/></button>
                        <div className={styles.dropdowncontent}>
                            <Link href='/rentals'>Rentals</Link>
                            <Link href='/storageunits'>Storage Units</Link>
                            <Link href='/parking'>Parking</Link>
                        </div>
                    </div>
                </li>
                <li><Link href='/about' className={styles.nav}>About</Link></li>
                <li><Link href='https://prokosrentals.managebuilding.com/Resident/public/contact' className={styles.nav}>Contact Us</Link></li>
                <li><Link href='https://prokosrentals.managebuilding.com/Resident/portal/login' className={styles.nav}>Sign In</Link></li>
                <Conditional showWhen={false/*!sessionStorage.getItem("signedin")*/}>
                    <li><Link href='' className={styles.nav}>Log Out</Link></li>
                </Conditional>
            </ul>
        </>
     );
}
 
export default Navigation;