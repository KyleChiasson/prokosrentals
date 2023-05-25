import styles from "@/styles/Footer.module.css"

const Footer = () => {
    return ( 
        <>
            <footer className={styles.bar}>
                <p className={styles.foot}>Loaction: 88 East State Street, Athens, OH 45701</p>
                <p className={styles.foot}>Phone: <a href="tel: +1740-594-2026">(740)594-2026</a></p>
                <p className={styles.foot}>Email: <a href="mailto: kate@prokos.net">kate@prokos.net</a></p>
            </footer>
        </>
     );
}
 
export default Footer;