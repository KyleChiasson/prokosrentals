const data = require('./rentals.json');

export const getStaticPaths = async () => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //const data = await res.json();

    const paths = data.map(property => {
        return{
            params: { id: property.id.toString() }
        }
    })

    return{
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    //const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    //const data = await res.json();
    for (var i = 0; i < data.length; i++){
        if(data[i].id == id)
            return{
                props: { property: data[i] }
            }
    }
    /*return{
        props: { property: data }
    }*/
}

const Properties = ({property}) => {
    return ( 
        <>
            <div>
                <h1>Property</h1>
                <ul>
                    <li>{property.address}</li>
                    <li>Unit: {property.unit}</li>
                    <li>Area: {property.sqft} sqft</li>
                    <li>Beds: {property.beds}</li>
                    <li>Bathrooms: {property.baths}</li>
                    <li>Rent: ${property.rent}</li>
                    <li>Available on: {property.available}</li>
                </ul>
            </div>
        </> 
    );
}
 
export default Properties;