import React, { Fragment } from 'react'

import './itemCard.css'

export const ItemCard = ({ car, handleBack }) => {

    return (
        <div className="item_background">
            <div className="item_container">
                <div className="item_header">
                    <a onClick={handleBack} href="#">Вернуться</a>
                </div>
                {car ?
                    (<Fragment>
                        <div className="item_center">
                            <div className="item_center_left">
                                <img src={car.image} width="450" />
                            </div>
                            <div className="item_center_right">
                                <h2>{car.name}</h2>
                                <p>{car.description}</p>
                            </div>
                        </div>
                        {
                            car.property.map(prop => (
                                <div className="item_block">
                                    <label>{prop.name}</label><br />
                                    {
                                        (prop.value.length > 1) ?
                                            (<Fragment>
                                                <select className="item_block_select">
                                                    {
                                                        prop.value.map(val => (
                                                            <>
                                                                <option>{val}</option>
                                                            </>
                                                        ))
                                                    }
                                                </select>
                                            </Fragment>) :
                                            (
                                                <input type="text" value={prop.value} />
                                            )
                                    }

                                </div>
                            ))
                        }
                        <div className="item_block_last">
                            <div>
                                <label>Стоимость</label><br />
                                <span>{car.price}$</span>
                            </div>
                            <div>
                                <button className="item_block_button">Беру!</button>
                            </div>

                        </div></Fragment>) : (
                        <div><h3>Такой машины не существует</h3></div>
                    )}
            </div>
        </div>
    )
}