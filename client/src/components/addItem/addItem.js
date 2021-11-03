import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { Plus } from '../../img/plus'
import { Minus } from '../../img/minus'
import { addNewCar } from '../../redux/cars/carsActions'
import { fetchProperty } from '../../redux/property/propertyActions'
import { selectProperty } from '../../redux/property/selector'
import { Form } from 'antd'
import { Formik } from 'formik'
import * as yup from 'yup'

import './addItem.css'

const AddItem = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchProperty())
    }, [dispatch])

    const history = useHistory()

    const [valuesVariant, setValuesVariant] = React.useState(false)
    const propertyFromState = useSelector(selectProperty)
    const [propertys, setPropertys] = React.useState([])

    const validateSchema = yup.object().shape({
        name: yup.string().max(50, "Максимальная длина 50 символов").min(3, "Минимальная длина 3 символа").required("Обязательно для заполнения"),
        image: yup.string().required("Обязательно для заполнения"),
        price: yup.string().max(20, "Максимальная длина 20 символов").required("Обязательно для заполнения"),
        description: yup.string()
    })

    const handleAddProperty = () => {
        setPropertys([...propertys, { name: '', value: [''] }])
    }

    const handleAddValues = (index) => {
        const newPropertys = [...propertys]
        const val = newPropertys[index]
        val.value.push('')
        newPropertys.splice(index, 1, val)
        setPropertys(newPropertys)
    }

    const handleChange = (index, event) => {
        const newPropertys = [...propertys]
        newPropertys[index][event.target.name] = event.target.value
        setPropertys(newPropertys)
    }

    const handleChangeValue = (index, index2, event) => {
        const newPropertys = [...propertys]
        newPropertys[index][event.target.name][index2] = event.target.value
        setPropertys(newPropertys)
    }

    const handleChangeOption = (name) => {
        const prop = propertyFromState.map(prop => {
            if (prop.name === name) {
                return prop
            }
        })
        const val = prop.filter(item => {
            if (item !== undefined && item.name === name) {
                return item
            }
        })
        if (val[0].value === 'dropdown') {
            setValuesVariant(true)
        } else {
            setValuesVariant(false)
        }
    }

    const handleRemooveProperty = (index) => {
        const oldProptertys = [...propertys]
        oldProptertys.splice(index, 1)
        setPropertys(oldProptertys)
    }

    const handleRemooveValues = (index, index2) => {
        const newPropertys = [...propertys]
        const val = newPropertys[index]
        val.value.splice(index2, 1)
        newPropertys.splice(index, 1, val)
    }

    const handleBack = () => {
        history.push('/listitem')
    }

    return (
        <div className="additem_background">
            <div className="additem_container">
                <Formik
                    initialValues={{
                        name: '',
                        image: '',
                        price: '',
                        description: ''
                    }}
                    validateOnBlur
                    validationSchema={validateSchema}
                    onSubmit={(values) => {
                        dispatch(addNewCar({
                            name: values.name,
                            image: values.image,
                            price: values.price,
                            description: values.description,
                            property: propertys
                        }))
                        handleBack()
                    }
                    }
                >
                    {({ values, touched, errors, handleBlur, handleChange, handleSubmit, isValid, dirty }) => (
                        <>
                            <div className="additem_buttons">
                                <button onClick={() => handleBack()}>Вернуться</button>
                                <button
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                >Сохранить</button>
                            </div>
                            <div className="additem_form">
                                <h4>Добавление товара</h4>
                                <div className="additem_form_input">
                                    <label>Название товара</label>
                                    <input
                                        type="text"
                                        value={values.name}
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.name && errors.name && <p style={{ color: 'red', fontWeight: 'bold', marginBottom: 0 }}>{errors.name}</p>}
                                </div>
                                <div className="additem_form_input">
                                    <label>Стоимость товара</label>
                                    <input
                                        type="text"
                                        value={values.price}
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.price && errors.price && <p style={{ color: 'red', fontWeight: 'bold', marginBottom: 0 }}>{errors.price}</p>}
                                </div>
                                <div className="additem_form_input">
                                    <label>Изображение</label>
                                    <input
                                        type="text"
                                        value={values.image}
                                        name="image"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.image && errors.image && <p style={{ color: 'red', fontWeight: 'bold', marginBottom: 0 }}>{errors.image}</p>}
                                </div>
                                <div className="additem_form_input">
                                    <p>Описание</p>
                                    <textarea
                                        value={values.description}
                                        name="description"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </>)}
                </Formik>

                <div className="additem_property_title"><h4>Добавление свойств товару</h4><Link onClick={handleAddProperty}><a><Plus /></a></Link></div>

                {propertys.map((property, index) => (
                    <div className="additem_property" key={index}>
                        <div className="additem_property_left">
                            <div className="additem_property_left_up">
                                <Link onClick={() => handleRemooveProperty(index)}><a><Minus /></a></Link>
                                <label>Свойство {index + 1}</label>
                            </div>
                            <div className="additem_property_left_down">
                                <select
                                    name="name"
                                    defaultValue={''}
                                    value={property.name}
                                    onChange={event => {
                                        handleChange(index, event)
                                        handleChangeOption(property.name)
                                    }}
                                >{propertyFromState.map((prop, index) => (
                                    <option
                                        key={index}
                                    >{prop.name}
                                    </option>
                                ))}
                                </select>
                            </div>
                        </div>
                        <div className="additem_property_right">
                            <label>Значение</label>
                            {
                                property.value.map((_, index2) => (
                                    <div className="additem_property_right_input" key={index2}>
                                        <input
                                            name="value"
                                            value={property.value[index2]}

                                            onChange={(event) => handleChangeValue(index, index2, event)}
                                        />
                                        <Link
                                            hidden={!valuesVariant}
                                            onClick={() => handleRemooveValues(index, index2)}
                                        ><a><Minus /></a>
                                        </Link>
                                    </div>
                                ))
                            }
                            <div className="additem_property_right_buttons">
                                <Link hidden={!valuesVariant} onClick={event => handleAddValues(index, event)}><a><Plus /></a></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddItem