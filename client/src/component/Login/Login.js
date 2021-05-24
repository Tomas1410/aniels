import React, { useState, useEffect, Fragment } from 'react'
import LoginStyles from './Login.module.css'
import img from '../../static/login/maklowicz.jpg'
import { connect } from 'react-redux'
import { login } from '../../actions/authAction'
import { clearErrors } from '../../actions/errorAction'
import { Redirect } from "react-router-dom";

function Login({ login, isAuthenticated, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flaga, setFlaga] = useState(null);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    login(user);

    isAuthenticated ? (setFlaga(true)) : (setFlaga(false))
  }

  // useEffect(() => {
  //   // Check for register error
  //   if (error.id === 'LOGIN_FAIL') {
  //     setMsg(error.msg.msg);
  //   } else {
  //     setMsg(null);
  //   }

  //   if (isAuthenticated) {
  //     <Redirect to="/" />
  //   }


  // }, [error, isAuthenticated])

  return (
    <React.Fragment>
      <h1 className={LoginStyles.logujSieHamie}>Zaloguj sie</h1>

      <div className={LoginStyles.imyczContainer}>
        <img src={img} alt="Avatar" className={LoginStyles.obrazek} />
      </div>
      <form onSubmit={handleSubmit}>
        <div class={LoginStyles.container}>
          <label htmlFor="uname"><b>Nazwa użytkownika</b></label>
          <input type="email" className={LoginStyles.inputs} placeholder="Wprowadz email" name="email" onChange={handleChangeEmail} />

          <label htmlFor="psw"><b>Hasło</b></label>
          <input type="password" placeholder="Wprowadz haslo" name="psw" onChange={handleChangePassword} />

          <button type="submit" className={LoginStyles.buttonClass}>Zaloguj sie </button>
          {flaga === null ? ('') : (isAuthenticated ? (<Redirect to="/" />) : (<p style={{ 'color': 'red' }}> Nieprawidlowe dane </p>))}
        </div>

      </form>

    </React.Fragment>)


}

const mapToStateProps = state => ({
  error: state.erorr,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapToStateProps, { login, clearErrors })(Login);

