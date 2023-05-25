import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children }) => {
    return ( 
        <>
            <Head>
                <title>Prokos Rentals</title>
            </Head>
            <div>
                <Navigation></Navigation>
                { children }
                <Footer></Footer>
            </div>
        </> 
    );
}
 
export default Layout;