import React from 'react'
import { Link } from 'react-router-dom'

import './listProperty.css'

export const ListProperty = ({ property, remooveProperty }) => {

    return (
        <div className="list_p_background">
            <div className="list_p_container">
                <div className="list_p_nav">
                    <ul className="list_p_nav_ul">
                        <li><Link to="/listitem">Листинг товаров</Link></li>
                        <li><Link to="/listprop">Листинг проперти</Link></li>
                    </ul>
                </div>
                <div className="list_p_button">
                    <Link to="/addprop"><button>Добавить проперти</button></Link>
                </div>
                <div>
                    <table className="list_p_list">
                        <th>Перечень проперти</th>
                        <th>тип</th>
                        <th>Управление</th>
                        {
                            property.map((prop) => (
                                <>
                                    <tr>
                                        <td>{prop.name}</td>
                                        <td>{prop.value}</td>
                                        <td>
                                            <a href="#" onClick={() => remooveProperty(prop._id)}>Удалить</a>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}