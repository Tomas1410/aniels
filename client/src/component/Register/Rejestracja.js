import React, { useState } from 'react'
import RejestracjaStyles from './Rejestracja.module.css'
import { connect } from 'react-redux'
import { register } from '../../actions/authAction'
import { Redirect } from "react-router-dom";


const Rejestracja = ({ register, isAuthenticated, authentcationFailed, error }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
            <h1 className={RejestracjaStyles.logujSieHamie}>Zarejestruj się</h1>
            <form onSubmit={handleSubmit}>

                <div className="container">
                    <label htmlFor="name"><b>Nazwa uzytkownika</b></label>
                    <input type="text" placeholder="Wymyśl swoją nazwę użytkownika" name="name" onChange={handleChangeName} required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Wprowadz swój email" name="email" onChange={handleChangeEmail} required />

                    <label htmlFor="password"><b>Hasło</b></label>
                    <input type="password" placeholder="Wprowadz haslo" name="password" onChange={handleChangePassword} required />

                    <button type="submit" className={RejestracjaStyles.buttonClass} >Zarejestruj się </button>

                    {authentcationFailed === true ? (<p style={{ 'color': 'red' }}> {error.message} </p>) : ('')}
                    {isAuthenticated ? (<Redirect to="/" />) : ('')}
                </div>

            </form>

        </React.Fragment>
    )
}
const mapToStateProps = state => ({
    error: state.error.msg,
    isAuthenticated: state.auth.isAuthenticated,
    authentcationFailed: state.auth.authentcationFailed,
    msg: state.auth.msg
})

export default connect(mapToStateProps, { register })(Rejestracja)
