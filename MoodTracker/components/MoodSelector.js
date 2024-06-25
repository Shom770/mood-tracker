import "../global.css"
import React from "react";
import { TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';
import { Icon } from '@rneui/themed';

export default function MoodSelector(props) {
    return (
        <TouchableOpacity onPress={() => console.log('pressed')}>
            <View className={`flex flex-col w-20 h-20 items-center justify-center rounded-lg ${props.color}`}>
                <Icon name={props.iconName} type={props.iconType} size={!props.size ? 36 : props.size} color="#0D1117"/>
                <Text className="text-[#0d1117] text-xl font-light">
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}