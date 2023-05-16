const ContactUs = () => {
    return ( 
        <>
            <h4>Please complete the form below and we'll get back to you as soon as possible.</h4>
            <form action="/action_page.php">
                <label for="fname">First name*: </label>
                <input type="text" id="fname" required="true"></input>
                <br></br><br></br>
                <label for="lname">Last name: </label>
                <input type="text" id="lname"></input>
                <br></br><br></br>
                <label for="email">Email*: </label>
                <input type="email" id="email" required="true"></input>
                <br></br><br></br>
                <label for="phone">Phone Number: </label>
                <input type="tel" id="phone"></input>
                <br></br><br></br>
                <label for="subject">Subject*: </label>
                <input type="text" id="subject" required="true"></input>
                <br></br><br></br>
                <label for="comments">Comments*: </label>
                <input type="text" id="comments" required="true"></input>
                <br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </>
     );
}
 
export default ContactUs;