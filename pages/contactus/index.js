const ContactUs = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
     
        const data = {
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            subject: event.target.subject.value,
            comment: event.target.subject.value,
        };
        alert(data.fname + " " + data.lname);
    };
    return ( 
        <>
            <h4>Please complete the form below and we'll get back to you as soon as possible.</h4>
            <form onSubmit={handleSubmit}>
                <label for="fname">First name*: </label>
                <br></br>
                <input type="text" id="fname" required="true"></input>
                <br></br><br></br>
                <label for="lname">Last name: </label>
                <br></br>
                <input type="text" id="lname"></input>
                <br></br><br></br>
                <label for="email">Email*: </label>
                <br></br>
                <input type="email" id="email" required="true"></input>
                <br></br><br></br>
                <label for="phone">Phone Number: </label>
                <br></br>
                <input type="tel" id="phone"></input>
                <br></br><br></br>
                <label for="subject">Subject*: </label>
                <br></br>
                <input type="text" id="subject" required="true"></input>
                <br></br><br></br>
                <label for="comments">Comments*: </label>
                <br></br>
                <textarea id="comments" required="true" cols={75} rows={8}></textarea>
                <br></br><br></br>
                <input type="submit" value="Submit"></input>
                <br></br><br></br>
            </form>
        </>
     );
}
 
export default ContactUs;