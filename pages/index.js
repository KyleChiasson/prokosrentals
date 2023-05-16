import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Image src="/43957e838cf54b108a4510d8a560d00a.jpg" width="400" height="200"></Image>
      <h2>Housing available for 2023-2024 & we are currently leasing for 2024-2025!</h2>
      <Link href="https://prokosrentals.managebuilding.com/Resident/portal/login">Sign In</Link>
      <p>Our family has been serving the Athens & Nelsonville communities for over 40 years.</p>
      <p>We strive to make our tenants happy and will not stop until we do! Quality rentals for anyone from Commercial units, student rentals, storage units, parking, student housing and more.  Also, we just opened the hottest hotel, the <a href='https://www.athenscentralhotel.com/' target='_blank'>Athens Central Hotel</a>.  This boutique hotel is located steps away from the Ohio University campus and Uptown Court Street.</p>
      <p>Contact us if you would like to schedule a tour or to see more pictures of our properties.</p>
      <p>Location: 88 East State St. Athens, OH 45701</p>
      <p>Email: <a href="mailto: kate@prokos.net">kate@prokos.net</a></p>
      <p>Phone: <a href="tel: +1740-594-2026">(740)594-2026</a></p>
      <p>Fax: (740)594-8343</p>
      <p>Office Hours: Monday-Friday 9:00 AM - 5:00 PM</p>
      <Image src="/Rental office red background white letters.jpg" width="350" height="200"></Image>
      <h4>Rental Application: <Link href='https://prokosrentals.managebuilding.com/Resident/rental-application/new'>Apply Now</Link></h4>
      <p>Prokos Managements understands the severity of the recent impact the coronavirus (COVID-19) is having on our country. As the largest owner of individual houses in the area and in order to accommodate any concerns you or your parents may have about your exposure living with large groups of people in dorms or large houses, we are offering new flexible leasing options for our small houses that can start immediately or at a later date.</p>
      <p>Please contact us if you cannot find what you are looking for, our staff is ready to help you!</p>
      <h3>The listings on this site might not be accurate. For an up-to-date listing visit our listings at apartments.com or call our office number at <a href="tel: +1740-594-2026">(740)594-2026</a></h3>
      {/*Featured Rentals*/}
    </>
  )
}
