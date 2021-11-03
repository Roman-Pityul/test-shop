import React from 'react'
import { Link } from 'react-router-dom'

import './listItem.css'

export const ListItem = ({ cars, deleteCar }) => {
    return (
        <div className="list_i_background">
            <div className="list_i_container">
                <div className="list_i_nav">
                    <ul className="list_i_nav_ul">
                        <li><Link to="/listitem">Листинг товаров</Link></li>
                        <li><Link to="/listprop">Листинг проперти</Link></li>
                    </ul>
                </div>
                <div className="list_i_button">
                    <Link to="/additem"><button>Добавить товар</button></Link>
                </div>
                <div>
                    <table className="list_i_list">
                        <th>Перечень товаров</th>
                        <th>Стоимость</th>
                        <th>Дата изменения</th>
                        <th>Управление</th>
                        {
                            cars.map((car) => (
                                <>
                                    <tr>
                                        <td>{<Link to={'/itemcard/' + car._id}><a>{car.name}</a></Link>}</td>
                                        <td>{car.price}</td>
                                        <td>1</td>
                                        <td>
                                            <a href="#">Ред.</a>
                                            <a href="#" onClick={() => deleteCar(car._id)}>Удалить</a>
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