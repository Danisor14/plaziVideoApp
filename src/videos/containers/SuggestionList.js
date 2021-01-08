import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function SuggestionList() {
    const data = [
        {
            name: 'kivi',
            id: 1
        },
        {
            name: 'dan',
            id: 2
        }
    ]
    return (
        <FlatList
            data={data}
            renderItem={({item}) => <Text>name: {item.name}</Text>}
        />
    )
}
