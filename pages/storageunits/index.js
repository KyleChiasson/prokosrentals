import Image from "next/image"

const StorageUnits = () => {
    return ( 
        <>
            <div>
                <Image src="/storage1.jpg" width="350" height="200"></Image>
                <h2>Affordable mini storage</h2>
                <p>9 Pine St.</p>
                <p>The Plains, OH 45780</p>
                <h4>Too much stuff? Not enough space? Give us a call today!</h4>
                <p>5x10 ft & 10x10 ft storage units for rent</p>
                <ul>
                    <li>4 month minimum contract</li>
                    <li>Not all payment has to be up front</li>
                    <li>You supply your own lock</li>
                    <li>Dry, concrete floors</li>
                    <li>8 ft ceilings</li>
                </ul>
                <h4>Call for availability at <a href="tel: +1740-594-2026">(740)594-2026</a></h4>
                <Image src="/storage2.jpg" width="350" height="200"></Image>
            </div>
        </>
     );
}
 
export default StorageUnits;