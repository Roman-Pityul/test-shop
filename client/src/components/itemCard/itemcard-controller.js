import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { addOneCar } from '../../redux/cars/carsActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectCar } from '../../redux/cars/selector'
import { ItemCard } from '../itemCard/itemCard'

const ItemCard_controller = ({ match }) => {

   const dispatch = useDispatch()
   const history = useHistory()

   const carId = match.params.id

   useEffect(() => {
      dispatch(addOneCar(carId))
   }, [])

   const car = useSelector(selectCar)

   const handleBack = () => {
      history.push('/listitem')
   }

   return (
      <ItemCard car={car} handleBack={handleBack} />
   )
}

export default ItemCard_controller