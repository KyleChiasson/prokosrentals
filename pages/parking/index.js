import Image from "next/image";

const Parking = () => {
    return ( 
        <>
            <div>
                <Image src="/parking1.jpg" width="400" height="200"></Image>
                <p>Affordable Off-Campus Parking</p>
                <p>Near Court St. & Ohio University's Campus</p>
                <p>Locations</p>
                <ul>
                    <li>
                        <p>78 East State St.</p>
                        <p>Perfect for those that live near College Street</p>
                    </li>
                    <li>
                        <p>9 West Stimson St.</p>
                        <p>Ideal for those who live on-campus, located near Palmer St. and is just a short walk from East & South Green.</p>
                    </li>
                </ul>
                <p>Rates</p>
                <ul>
                    <li>
                        <p>$320 Spring Semester</p>
                        <p>$400 Fall Semester at all lots</p>
                        <p>$80 per month at all lots</p>
                        <p>$15 per weekend (Holiday rates may differ)</p>
                    </li>
                </ul>
                <p>Spots fill up fast! Reserve your space for next school year today!</p>
            </div>
        </>
    );
}
 
export default Parking;