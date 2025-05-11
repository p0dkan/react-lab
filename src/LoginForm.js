import {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);


    function handleChange(event) {
        setEmail(event.target.value);
        setValidEmail(true);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(validateEmail(email))
            props.onLogin(email)
        else{
            setValidEmail(false)
        }
    }



    return (<form onSubmit={handleSubmit}>
        <label>
            Zaloguj się e-mailem:
            <input
                type="text"
                value={email}
                onChange={handleChange}
            />
        </label>
        {!validEmail && (
            <p className="error">
                Adres e-mail musi zawierać znak "@"
            </p>
        )}
        <button type="submit">
            Wchodzę
        </button>
    </form>)

}