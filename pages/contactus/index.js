import styles from "@/styles/ContactUs.module.css"

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
            <text className={styles.text}>
                <h4>Please complete the form below and we'll get back to you as soon as possible.</h4>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <label for="fname">First name*: </label>
                        <br/>
                        <input type="text" id="fname" required="true"></input>
                    </div>
                    <div>
                        <label for="lname">Last name: </label>
                        <br/>
                        <input type="text" id="lname"></input>
                    </div>
                    <br/>
                    <div>
                        <label for="email">Email*: </label>
                        <br/>
                        <input type="email" id="email" required="true"></input>
                    </div>
                    <div>
                        <label for="phone">Phone Number: </label>
                        <br/>
                        <input type="tel" id="phone"></input>
                    </div>
                    <br/>
                    <div>
                        <br/>
                        <label for="subject">Subject*: </label>
                        <br/>
                        <input type="text" id="subject" required="true"></input>
                        <br/><br/>
                        <label for="comments">Comments*: </label>
                        <br/>
                        <textarea id="comments" required="true" cols={75} rows={8}></textarea>
                        <br/><br/>
                        <input type="submit" value="Submit"></input>
                    </div>
                </form>
            </text>
        </>
     );
}
 
export default ContactUs;