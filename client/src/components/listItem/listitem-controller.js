import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars, remooveCar } from '../../redux/cars/carsActions'
import { selectCars, selectIsLoading } from '../../redux/cars/selector'
import { ListItem } from '../listItem/listItem'

const ListItem_controller = () => {

   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchCars())
   }, [dispatch])

   const deleteCar = (carId) => {
      dispatch(remooveCar(carId))
   }

   const cars = useSelector(selectCars)
   const isLoading = useSelector(selectIsLoading)

   if (isLoading === true) {
      return (
         <div><h1>SPINER</h1></div>
      )
   }

   return (
      <ListItem cars={cars} deleteCar={deleteCar} />
   )
}

export default ListItem_controller