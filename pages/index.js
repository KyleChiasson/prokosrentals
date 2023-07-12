import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Prokos Rentals</h1>
      <p></p>
      <Image src="/Main.jpg" width="500" height="300" className={styles.mainImage}/>
      <h1 className={styles.centertext}> Housing available for this school year & We are currently leasing for next school year!</h1>
      <h2 className={styles.applybar}><Link href={"/rentals"}>Apply Now</Link></h2>
      
      <div className={styles.imagelist}>
        <p><Link href="./contactus">Contact us</Link> if you would like to schedule a tour, to see more pictures of our properties, or if you cannot find what you are looking for. Our staff is always ready to help!<br/><br/>Location: 88 East State St. Athens, OH 45701<br/>Email: <a href="mailto: kate@prokos.net">kate@prokos.net</a><br/>Phone: <a href="tel: +1740-594-2026">(740)594-2026</a><br/>Office Hours: Monday-Friday 9:00 AM - 5:00 PM</p>
        <Image src="/Slot1.jpg" width={480} height={270}/>
      </div>
      <div className={styles.imagelist}>
        <Image src="/Slot2.jpg" width={480} height={270}/>
        <p>Our family has been serving the Athens & Nelsonville communities for over 40 years.<br/>&emsp;&emsp;We strive to make our tenants happy and will not stop until we do! Quality rentals for anyone from Commercial units, student rentals, storage units, parking, student housing and more.  Also, we just opened the hottest hotel, the <a href='https://www.athenscentralhotel.com/' target='_blank'>Athens Central Hotel</a>.  This boutique hotel is located steps away from the Ohio University campus and Uptown Court Street.</p>
      </div>
      <div className={styles.imagelist}>
        <p>Located in Athens Ohio, we are a great rental option for students of <Link href="https://www.ohio.edu/">Ohio University</Link>.</p>
        <Image src="/Slot3.jpg" width={480} height={270}/>
      </div>
      <div className={styles.imagelist}>
        <Image src="/Slot4.jpg" width={480} height={270}/>
        <p>Most of our rentals are a short walk away from Ohio University and Court Street, the center of activity in Athens.</p>
      </div>
      <div className={styles.imagelist}>
        <p>We also have <Link href="./parking">parking</Link> and <Link href="./storageunits">storage solutions</Link> available to rent.</p>
        <Image src="/Slot5.jpg" width={480} height={270}/>
      </div>
      <h3 className={styles.disclaimer}>To view our listings in a different format check us out at <Link href="https://www.apartments.com/property-management/prokos-rentals/kwn0vkc/">apartments.com</Link></h3>
    </>
  )
}
