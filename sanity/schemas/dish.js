import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Dish Name",
      validation:(Rule)=>Rule.required()
    }, 
     {
      name:"short_descrption",
      type:"string",
      title:"Short Description",
      validation:(Rule)=>Rule.max(200)
    },
    {
      name:"price",
      type:"number",
      title:"Price in Rs",
    },
    {
      name:"image",
      type:"image",
      title:"Image of Dish",
    
    },
  ]
})
