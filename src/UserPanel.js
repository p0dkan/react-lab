import {useState} from "react";


export default function UserPanel(props) {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleLogOut() {
        setSubmitted(false);
        setEmail('');
    }
return(
    <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
        <h1>Witaj, {props.username}!</h1>
        <button type="button" onClick={()=> props.onLogout()}>
            Wyloguj
        </button>
    </div>)
}