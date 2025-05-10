import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false)

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit() {
        setSubmitted(true);
    }

    function handleLogOut(){
        setSubmitted(false)

    }


    // let message;
    // if (email.length < 10) {
    //     message = <div>Ale masz krótki adres!</div>;
    // } else if (email.length < 15) {
    //     message = <div>Twój adres e-mail jest w sam raz.</div>;
    // } else {
    //     message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    //
    // }

    if (submitted){
        return (

            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>
                <h1>Witaj, {email}!</h1>
                <button type="button" onClick={handleLogOut}>
                    wyloguj
                </button>
            </div>
        );
    }

    else {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>
                <label>
                    Zaloguje się e-mailem:
                    <input type="text" value={email} onChange={handleChange} />
                </label>
                <button type="button" onClick={handleSubmit}>
                    Wchodzę
                </button>

            </div>

        );

    }


}
export default App;
