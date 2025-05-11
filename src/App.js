import './App.css';
import { useState } from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);


    function handleChange(email) {
        setEmail(email);
        setSubmitted(true)
    }

    function handleLogOut() {
        setSubmitted(false);
        setEmail('');
    }

    // function handleLogIn(){
    //     setSubmitted(true)
    //     setEmail(email)
    // }

    if (submitted) {
        return (
            <div>
                {submitted
                    ? <UserPanel username={email} onLogout={handleChange}/>
                    : <LoginForm onLogin = {handleLogOut}/>
                }
            </div>
        );
    } else {
        return (
            <div>
                <h1>Witaj w systemie do zapisów na zajęcia</h1>
                <LoginForm onLogin={handleChange}/>
            </div>
        );
    }
}

export default App;
