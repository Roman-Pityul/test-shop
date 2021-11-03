import React from 'react'

import './registration.css'

const Registration = () => {
    return (
        <div className="reg_background">
            <div className="reg_form">
                <div className="reg_title">
                    <h2>Регистрация</h2>
                </div>
                <div className="reg_input">
                    <label>Логин</label><br />
                    <input type="text" placeholder="Введите логин" />
                </div>
                <div className="reg_input">
                    <label>Пароль</label><br />
                    <input type="password" placeholder="Введите пароль" />
                </div>
                <div className="reg_input">
                    <label>Повторите пароль</label><br />
                    <input type="password" placeholder="Повторите пароль" />
                </div>
                <div className="reg_button">
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}

export default Registration