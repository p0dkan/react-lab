import './App.css';
import { useState } from "react";
import "milligram";

function App() {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [validEmail, setValidEmail] = useState(true);

    function handleChange(event) {
        setEmail(event.target.value);
        setValidEmail(true);
    }

    function validateEmail(email) {
        return email.includes('@');
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validateEmail(email)) {
            setSubmitted(true);
        } else {
            setValidEmail(false);
        }
    }

    function handleLogOut() {
        setSubmitted(false);
        setEmail('');
        setValidEmail(true);
    }

    if (submitted) {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>
                <h1>Witaj, {email}!</h1>
                <button type="button" onClick={handleLogOut}>
                    Wyloguj
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        );
    }
}

export default App;
