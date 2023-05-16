import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <p>Prokos Rentals</p>
      <h1>Sign In</h1>
      <p>Housing available for 2023-2024 & we are currently leasing for 2024-2025!</p>
      <p>Our family has been serving the Athens & Nelsonville communities for over 40 years.</p>
      <p>We strive to make our tenants happy and will not stop until we do! Quality rentals for anyone from Commercial units, student rentals, storage units, parking, student housing and more.  Also, we just opened the hottest hotel, the <a href='https://www.athenscentralhotel.com/' target='_blank'>Athens Central Hotel</a>.  This boutique hotel is located steps away from the Ohio University campus and Uptown Court Street.</p>
      <p>Contact us if you would like to schedule a tour or to see more pictures of our properties.</p>
      <p>88 East State St. Athens, OH 45701</p>
      <p>PHONE: (740)594-2026</p>
      <p>FAX: (740)594-8343</p>
      <p>Office Hours: Monday-Friday 9:00 AM - 5:00 PM</p>
      <p>Rental Application: <Link href='/applynow'>Apply Now</Link></p>
      <p>Prokos Managements understands the severity of the recent impact the coronavirus (COVID-19) is having on our country. As the largest owner of individual houses in the area and in order to accommodate any concerns you or your parents may have about your exposure living with large groups of people in dorms or large houses, we are offering new flexible leasing options for our small houses that can start immediately or at a later date.</p>
      <p>Please contact us if you cannot find what you are looking for, our staff is ready to help you!</p>
      <p>The listings on this site might not be accurate. For an up-to-date listing visit our listings at apartments.com or call our office number at (740)594-2026</p>
      <h1>Featured Rentals</h1>
    </>
  )
}
