import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth , provider} from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from "../StateProvider"

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error.message));
    }; 
    
    return (
        <div className="login">
            <div className="login__container">
                <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6b%2FWhatsApp.svg%2F479px-WhatsApp.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AWhatsApp.svg&tbnid=zNw2N94fvjSbwM&vet=12ahUKEwjC5pigjuzwAhUBGCsKHb1MAtYQMygBegUIARDVAQ..i&docid=0BWHesb29ORkfM&w=479&h=480&q=whatsapp%20logo&ved=2ahUKEwjC5pigjuzwAhUBGCsKHb1MAtYQMygBegUIARDVAQ' alt="" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
