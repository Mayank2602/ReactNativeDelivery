import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const DishRow = (
    {
        name,
        description,
        price,
        id,
        image
    }
) => {
    const [isPressed,setIsPressed] = useState(false)
  return (
    <>
    <TouchableOpacity
        onPress={()=>setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 flex-row ${isPressed && "border-b-0"}`}
    >
      <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
                <Currency quantity={price} currency='INR'/>
            </Text>
         </View>
         <View>
                <Image
                    source={{
                        uri:urlFor(image).url()
                    }}
                    className='h-20 w-20 bg-gray-300 p-4'
                />
            </View>
    </TouchableOpacity>
    {isPressed && (
            <View className='bg-white'>
                <View className='flex-row items-center space-x-2 pb-3'>
                    <TouchableOpacity>
                        <MinusCircleIcon 
                            color='#00BBCC'
                            // color={items.length>0 ? '#00BBCC':'gray'}
                            size={40}
                        />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon 
                            color='#00BBCC'
                            // color={items.length>0 ? '#00BBCC':'gray'}
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )} 
    </>
  )
}

export default DishRow

  {/* <TouchableOpacity 
            // onPress={()=>setIsPressed(!isPressed)}
        className='bg-white border p-4 border-gray-200 flex-row'>
            <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
                <Currency quantity={price} currency='INR'/>
            </Text>
            </View>
            <View>
                <Image
                    source={{
                        uri:urlFor(image).url()
                    }}
                    className='h-20 w-20 bg-gray-300 p-4'
                />
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View>
                <View>
                    <TouchableOpacity>
                        <MinusCircleIcon 
                            // color={items.length>0 ? '#00BBCC':'gray'}
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )} */}