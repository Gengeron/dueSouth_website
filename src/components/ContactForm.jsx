import React, { useState } from 'react';
import {handleSubmit} from "../firebase/firebase.js";

const ContactForm = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    return (
        <form className="formBox" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Imię</label>
                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="message">Wiadomość</label>
                <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
            </div>

            <button type="submit">Wyślij</button>
        </form>
    )
}

export default ContactForm;