import "../global.css"
import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';

export default function MoodSelector(props) {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <View className={`flex w-16 h-16 items-center justify-center rounded-lg ${props.color}`}>
                <Text className="text-[#0d1117] text-3xl font-semibold">
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}