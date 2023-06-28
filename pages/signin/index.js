import Link from "next/link";
import styles from "@/styles/SignIn.module.css";

const signIn = () => {
    return ( 
        <>
            <div className={styles.login}>
                <p>Sign In To Your Account:</p>
                <form>
                    <label for="aname">Account name: </label>
                    <br/>
                    <input type="text" id="aname" required="true"></input>
                    <br/>
                    <label for="password">Password: </label>
                    <br/>
                    <input type="password" id="password" required="true"></input>
                    <br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
                <p>Forgot your password? <Link href='/resetpassword'>Reset Password</Link></p>
                <p>Don't have an account? <Link href='/createaccount'>Create Account</Link></p>
            </div>
        </> 
    );
}
 
export default signIn;