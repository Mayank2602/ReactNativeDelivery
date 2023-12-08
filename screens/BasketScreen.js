import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant= useSelector(selectRestaurant);
    const items=useSelector(selectBasketItems);
    const dispatch= useDispatch();
    const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([]);

    useEffect(()=>{
        const groupedItems=items.reduce((results,item)=>{
            (results[item.id]=results[item.id]|| []).push(item);
            return results;
        },{})
        setGroupedItemsInBasket(groupedItems)
    },[items]);
   
  return (
    <SafeAreaView className='flex-1 bg-white mt-5 '>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00BBCC] bg-white shadow-xs'>
            <View>
                <Text className='text-lg text-center font-bold'>Basket</Text>
                <Text className='text-center texxt-gray-400'>{restaurant.title}</Text>
            </View>
            <TouchableOpacity
                onPress={navigation.goBack}
                className='rounded full absolute bg-gray-100 top-3 right-5'
            >
                <XCircleIcon color="#00BBCC" size={50}/>
            </TouchableOpacity>
        </View>
        <View>
            <Image
                source={{
                    uri:"https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen