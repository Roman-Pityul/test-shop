import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import './addProperty.css'

export const AddProperty = ({ addNewProperty, handleBack }) => {

    const dispatch = useDispatch()

    const validateSchema = yup.object().shape({
        name: yup.string().max(50, 'Максимум 50 символов').required('Обязательное поле!'),
        value: yup.string().required('Обязательное поле!')
    })

    return (
        <Formik
            initialValues={{
                name: '',
                value: ''
            }}
            validateOnBlur
            validationSchema={validateSchema}
            onSubmit={(values) => {
                dispatch(
                    addNewProperty({
                        name: values.name,
                        value: values.value
                    })
                )
                handleBack()
            }}
        >
            {({
                values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty
            }) => (
                <div className="addprop_background">
                    <div className="addprop_container">
                        <div className="addprop_buttons">
                            <button onClick={() => handleBack()}>Вернуться</button>
                            <button
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                            >Сохранить</button>
                        </div>
                        <div className="addprop_form">
                            <h4>Добавление свойства</h4>
                            <div className="addprop_form_input">
                                <label>Название свойства</label>
                                <input
                                    type="text"
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />

                                {touched.name && errors.name && <p style={{ color: 'red', fontWeight: 'bold', marginBottom: 0 }}>{errors.name}</p>}

                            </div>
                            <div className="addprop_form_input_radio">
                                <label>Укажите тип свойства</label>
                                <div>
                                    <input
                                        type="radio"
                                        name="value"
                                        value="dropdown"
                                        onChange={handleChange} />
                                    <label htmlFor="value">Dropdown</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="value"
                                        value="number"
                                        onChange={handleChange} />
                                    <label htmlFor="value">Number</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="value"
                                        value="string"
                                        onChange={handleChange} />
                                    <label htmlFor="value">String</label>

                                    {touched.value && errors.value && <p style={{ color: 'red', fontWeight: 'bold', marginBottom: 0 }}>{errors.value}</p>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}