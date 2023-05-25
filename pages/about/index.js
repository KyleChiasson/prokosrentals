import Image from "next/image";

const About = () => {
    return ( 
        <>
            <div>
                <p>Prokos Rentals is a quality rental company that has been serving the Athens and Nelsonville communities for over 35 years! We strive to provide all of your rental needs, including apartment, home, storage unit, parking, and commercial rentals. Great customer service is a must! Our staff is extremely attentive, and our maintenance crew is always on-call for emergencies.</p>
                <p>Follow us on Instagram!</p>
                <a href='https:www.instagram.com/prokosrentals_ou' target='_blank'>www.instagram.com/prokosrentals_ou</a>
                <p>Prokos Rentals is happy to be able to serve our community. We would like to say thank you to all of our customers!</p>
            </div>
            <div>
                <h3>Meet Our Team</h3>
                <ul>
                    <div>
                        <Image src="/1.png" width="100" height="100"></Image>
                        <h4>Name 1</h4>
                        <p>Job Title</p>
                    </div>
                    <div>
                        <Image src="/1.png" width="100" height="100"></Image>
                        <h4>Name 2</h4>
                        <p>Job Title</p>
                    </div>
                    <div>
                        <Image src="/1.png" width="100" height="100"></Image>
                        <h4>Name 3</h4>
                        <p>Job Title</p>
                    </div>
                    <div>
                        <Image src="/1.png" width="100" height="100"></Image>
                        <h4>Name 4</h4>
                        <p>Job Title</p>
                    </div>
                </ul>
            </div>
        </>
     );
}
 
export default About;