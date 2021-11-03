import React from 'react'
import { Link } from 'react-router-dom'

import './login.css'

export const Login = () => {
    return (
        <div className="login_background">
            <div className="login_form">
                <div className="login_title">
                    <h2>Вход</h2>
                </div>
                <div className="login_input">
                    <label>Логин</label><br />
                    <input type="text" placeholder="Введите логин" />
                </div>
                <div className="login_input">
                    <label>Пароль</label><br />
                    <input type="password" placeholder="Введите пароль" />
                </div>
                <div className="login_button">
                    <Link to="/listitem"><button>Войти</button></Link>
                </div>
            </div>
        </div>
    )
}