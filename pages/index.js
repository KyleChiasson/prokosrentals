import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Image src="/HomePage/Main.jpeg" width="500" height="300" className={styles.mainImage}/>
      <h2 className={styles.centertext}> Housing available for this school year & We are currently leasing for next school year!</h2>
      <h2 className={styles.applybar}><Link href={"/rentals"}>Apply Now</Link></h2>
      
      <div className={styles.imagelist}>
        <p>Our family has been serving the Athens & Nelsonville communities for over 40 years.<br/>&emsp;&emsp;We strive to make our tenants happy and will not stop until we do! Quality rentals for anyone from Commercial units, student rentals, storage units, parking, student housing and more.  Also, we just opened the hottest hotel, the <a href='https://www.athenscentralhotel.com/' target='_blank'>Athens Central Hotel</a>.  This boutique hotel is located steps away from the Ohio University campus and Uptown Court Street.</p>
        <Image src="/HomePage/Over3.jpeg" width={480} height={270}/>
      </div>
      <div className={styles.imagelist}>
        <Image src="/HomePage/Baker2.jpeg" width={480} height={270}/>
        <p>Located in Athens Ohio, we are a great rental option for students of <Link href="https://www.ohio.edu/">Ohio University</Link>.</p>
      </div>
      <div className={styles.imagelist}>
        <p>Most of our rentals are a quick walk away from Court Street, the center of activity in Athens.</p>
        <Image src="/HomePage/Court.jpeg" width={480} height={270}/>
      </div>
      <div className={styles.imagelist}>
        <Image src="/HomePage/West.jpeg" width={480} height={270}/>
        <p>We also have <Link href="./parking">parking</Link> and <Link href="./storageunits">storage solutions</Link> available to rent.</p>
      </div>
      <div className={styles.imagelist}>
        <p><Link href="./contactus">Contact us</Link> if you would like to schedule a tour, to see more pictures of our properties, or if you cannot find what you are looking for. Our staff is always ready to help!</p>
        <Image src="/HomePage/Emeriti.jpeg" width={480} height={270}/>
      </div>
      <div className={styles.imagelist}>
        <Image src="/Rental office red background white letters.jpg" width={480} height={270}/>
        <p>Location: 88 East State St. Athens, OH 45701<br/>Email: <a href="mailto: kate@prokos.net">kate@prokos.net</a><br/>Phone: <a href="tel: +1740-594-2026">(740)594-2026</a><br/>Fax: (740)594-8343<br/>Office Hours: Monday-Friday 9:00 AM - 5:00 PM</p>
      </div>
      <div className={styles.imagelist}>
        <p>&emsp;&emsp;Prokos Managements understands the severity of the recent impact COVID-19 is having on our country. As the largest owner of individual houses in the area and in order to accommodate any concerns you or your parents may have about your exposure living with large groups of people in dorms or large houses, we are offering new flexible leasing options for our small houses that can start immediately or at a later date.</p>
        <Image src="/HomePage/Central2.jpeg"width={480} height={270}/>
      </div>
      <h3>The listings on this site might not be accurate. For an up-to-date listing visit our listings at <Link href="https://www.apartments.com/property-management/prokos-rentals/kwn0vkc/">apartments.com</Link> or call our office number at <a href="tel: +1740-594-2026">(740)594-2026</a></h3>
      <div className={styles.description}>
      </div>
    </>
  )
}
