import React, { useState, useEffect } from 'react'
import LoginStyles from './Rejestracja.module.css'
import { connect } from 'react-redux'
import { register } from '../../actions/authAction'



const Rejestracja = ({ register }) => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password
        }
        register(user);
    }



    return (
        <React.Fragment>
            <h1 className={LoginStyles.logujSieHamie}>Zarejestruj się</h1>
            <form onSubmit={handleSubmit}>

                <div className="container">
                    <label htmlFor="name"><b>Nazwa uzytkownika</b></label>
                    <input type="text" placeholder="Wymyśl swoją nazwę użytkownika" name="name" onChange={handleChangeName} />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Wprowadz swój email" name="email" onChange={handleChangeEmail} />

                    <label htmlFor="password"><b>Hasło</b></label>
                    <input type="password" placeholder="Wprowadz haslo" name="password" onChange={handleChangePassword} />

                    <button type="submit" className={LoginStyles.buttonClass} >Zarejestruj się </button>

                </div>

            </form>

        </React.Fragment>
    )
}
const mapToStateProps = state => ({
    error: state.erorr,
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapToStateProps, { register })(Rejestracja)
