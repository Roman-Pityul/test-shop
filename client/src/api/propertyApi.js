import axios from 'axios'

export const propertyApi = {
   async getAllProperty() {
      const data = await axios.get('http://localhost:5000/api/property/')
      return data.data
   },

   async addNewProperty(property) {
      const data = await axios.post('http://localhost:5000/api/property/', property)
      return data.data
   },

   async deleteProperty(property) {
      await axios.get(`http://localhost:5000/api/property/remoove/${property}`)
   }
}