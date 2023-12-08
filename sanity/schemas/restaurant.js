import {defineField, defineType} from 'sanity'
import category from './category'

export default ({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant Name",
      validation:(Rule)=>Rule.required()
    },
    {
      name:"short_descrption",
      type:"string",
      title:"Short Description",
      validation:(Rule)=>Rule.max(200)
    },
    {
      name:"image",
      type:"image",
      title:"Image",
    
    },
    {
      name:"lat",
      type:"number",
      title:"Latitude of the restaurant",
      
    },
    {
      name:"long",
      type:"number",
      title:"Longitude of the restaurant",
    },
    {
      name:"address",
      type:"string",
      title:"Address of the restaurant",
      validation:(Rule)=>Rule.required()
    },
    {
      name:"rating",
      type:"number",
      title:"Enter a rating between 1-5 stars",
      validation:(Rule)=>Rule.required().min(1).max(5).error("Please enter a rating between 1 and 5")
    },
    {
      name:"type",
      title:"Category",
      validation:(Rule)=>Rule.required(),
      type:"reference",
      to:[{type:"category"}],
    }, {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference", to:[{type:"dish"}]}],
    },
  ],
})
