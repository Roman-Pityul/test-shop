import React from 'react'
import { useHistory } from 'react-router-dom'
import { addNewProperty } from '../../redux/property/propertyActions'
import { AddProperty } from '../addProperty/addProperty'

const AddProperty_controller = () => {

   const history = useHistory()

   const handleBack = () => {
      history.goBack()
   }

   return (
      <AddProperty addNewProperty={addNewProperty} handleBack={handleBack} />
   )
}

export default AddProperty_controller