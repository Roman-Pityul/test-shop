import React from 'react'
import { ListProperty } from '../listProperty/listProperty'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProperty, deleteProperty } from '../../redux/property/propertyActions'
import { selectProperty, selectIsLoading } from '../../redux/property/selector'

const ListProperty_controller = () => {

   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(fetchProperty())
      console.log('dispatch listproperrty')
   }, [dispatch])

   const remooveProperty = (id) => {
      dispatch(deleteProperty(id))
   }

   const property = useSelector(selectProperty)
   const isLoading = useSelector(selectIsLoading)

   if (isLoading === true) {
      return (
         <div><h1>SPINER</h1></div>
      )
   }

   return (
      <ListProperty property={property} remooveProperty={remooveProperty} />
   )
}

export default ListProperty_controller